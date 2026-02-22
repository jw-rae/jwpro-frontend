/**
 * Shared RSS parsing utilities — auto-imported by Nitro in all server routes.
 */

export interface RSSItem {
    title: string
    link: string
    source: string
    category: string
    date: string
    description: string
}

export const RSS_FEEDS: Array<{ url: string; source: string; category: string }> = [
    // GIS / Geospatial
    { url: 'https://gisgeography.com/feed/', source: 'GIS Geography', category: 'GIS' },
    { url: 'https://blog.qgis.org/feed/', source: 'QGIS Blog', category: 'GIS' },
    { url: 'https://www.ogc.org/feed/', source: 'OGC', category: 'GIS' },
    // Security
    { url: 'https://cvefeed.io/rssfeed/severity/high.xml', source: 'CVEfeed (High)', category: 'Security' },
    { url: 'https://cvefeed.io/rssfeed/newsroom.xml', source: 'CVEfeed (Newsroom)', category: 'Security' },
    // Tech Blog
    { url: 'https://stackoverflow.blog/feed/', source: 'Stack Overflow', category: 'Tech Blog' },
    { url: 'https://github.blog/feed/', source: 'GitHub Blog', category: 'Tech Blog' },
    // Tech News
    { url: 'https://news.ycombinator.com/rss', source: 'Hacker News', category: 'Tech News' },
    { url: 'https://thenewstack.io/feed/', source: 'The New Stack', category: 'Tech News' },
    { url: 'https://www.infoq.com/rss/news', source: 'InfoQ News', category: 'Tech News' },
    { url: 'https://arstechnica.com/feed/', source: 'Ars Technica', category: 'Tech News' },
    // Cloud
    { url: 'https://azure.microsoft.com/en-us/blog/feed/', source: 'Azure Blog', category: 'Cloud' },
    { url: 'https://aws.amazon.com/blogs/aws/feed/', source: 'AWS Blog', category: 'Cloud' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

export function safeGroup(
    m: RegExpMatchArray | RegExpExecArray | null,
    index: number,
): string {
    if (m === null) return ''
    const v = m[index]
    return typeof v === 'string' ? v : ''
}

export function extractTag(xml: string, tag: string): string {
    const re = new RegExp(
        `<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`,
        'i',
    )
    return safeGroup(xml.match(re), 1).trim()
}

export function extractLink(xml: string): string {
    const atom = xml.match(/<link[^>]+href=["']([^"']+)["'][^>]*\/?>/i)
    if (atom !== null) return safeGroup(atom, 1).trim()
    return extractTag(xml, 'link')
}

/** Aggressively strip HTML and decode entities from a description string. */
export function cleanHtml(raw: string): string {
    let s = raw
    // Remove entire script / style blocks (some feeds embed them)
    s = s.replace(/<script[\s\S]*?<\/script>/gi, '')
    s = s.replace(/<style[\s\S]*?<\/style>/gi, '')
    // First decode pass — handles &lt;p&gt; double-encoded markup
    s = s
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
        .replace(/&#(\d+);/g, (_, n: string) => String.fromCharCode(Number(n)))
    // Strip all remaining HTML tags after the first decode
    s = s.replace(/<[^>]+>/g, ' ')
    // Second entity clean-up pass (anything still encoded)
    s = s
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
        .replace(/&#?\w+;/g, ' ')
    // Collapse whitespace
    return s.replace(/\s+/g, ' ').trim()
}

export function decodeEntities(s: string): string {
    return s
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#(\d+);/g, (_, n: string) => String.fromCharCode(Number(n)))
        .replace(/&[a-z]+;/g, ' ')
}

export function parseItems(xml: string, source: string, category: string): RSSItem[] {
    const items: RSSItem[] = []
    const block = /<(item|entry)>([\s\S]*?)<\/\1>/gi
    let m: RegExpExecArray | null

    while ((m = block.exec(xml)) !== null) {
        const chunk = safeGroup(m, 2)
        const title = decodeEntities(extractTag(chunk, 'title'))
        const link = extractLink(chunk)
        const rawDate =
            extractTag(chunk, 'pubDate') ||
            extractTag(chunk, 'published') ||
            extractTag(chunk, 'updated')
        const date = rawDate ? new Date(rawDate).toISOString().slice(0, 10) : ''
        const rawDesc = extractTag(chunk, 'summary') || extractTag(chunk, 'description')
        const description = cleanHtml(rawDesc).slice(0, 280)

        if (title && link) {
            items.push({ title, link, source, category, date, description })
        }
    }
    return items
}

// ── NVD 2.0 JSON API ─────────────────────────────────────────────────────────

interface NvdCve {
    id: string
    published: string
    descriptions: Array<{ lang: string; value: string }>
    references: Array<{ url: string }>
    metrics?: {
        cvssMetricV31?: Array<{ cvssData: { baseScore: number; baseSeverity: string } }>
        cvssMetricV2?: Array<{ cvssData: { baseScore: number } }>
    }
}

export async function fetchNvdCves(): Promise<RSSItem[]> {
    const pubStart = new Date()
    pubStart.setMonth(pubStart.getMonth() - 3)
    const fmt = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, '.000')

    try {
        const json = await $fetch<{ vulnerabilities: Array<{ cve: NvdCve }> }>(
            'https://services.nvd.nist.gov/rest/json/cves/2.0',
            {
                query: { resultsPerPage: 50, pubStartDate: fmt(pubStart), pubEndDate: fmt(new Date()) },
                headers: { 'User-Agent': 'jwpro-rss-reader/1.0' },
                timeout: 8000,
            },
        )

        return (json.vulnerabilities ?? []).map(({ cve }) => {
            const desc = cve.descriptions.find(d => d.lang === 'en')?.value ?? ''
            const link = cve.references[0]?.url ?? `https://nvd.nist.gov/vuln/detail/${cve.id}`
            const score =
                cve.metrics?.cvssMetricV31?.[0]?.cvssData.baseScore ??
                cve.metrics?.cvssMetricV2?.[0]?.cvssData.baseScore
            const severity = cve.metrics?.cvssMetricV31?.[0]?.cvssData.baseSeverity ?? ''
            const prefix = score ? `[CVSS ${score}${severity ? ' ' + severity : ''}] ` : ''
            return {
                title: cve.id,
                link,
                source: 'NVD',
                category: 'Vulnerabilities',
                date: cve.published.slice(0, 10),
                description: cleanHtml(prefix + desc).slice(0, 280),
            }
        })
    }
    catch (err) {
        console.warn('[rss] Failed to fetch NVD CVEs:', err)
        return []
    }
}

/** ISO date string for N months ago. */
export function cutoffDate(monthsBack = 3): string {
    const d = new Date()
    d.setMonth(d.getMonth() - monthsBack)
    return d.toISOString().slice(0, 10)
}
