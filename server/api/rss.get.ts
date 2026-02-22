/**
 * GET /api/rss
 *
 * Fetches all configured RSS feeds + NVD CVEs in parallel, returns sorted JSON.
 * Parsing utilities live in server/utils/rss.ts (Nitro auto-import).
 */

export default defineEventHandler(async () => {
    const all: RSSItem[] = []

    await Promise.allSettled(
        RSS_FEEDS.map(async ({ url, source, category }) => {
            try {
                const xml = await $fetch<string>(url, {
                    headers: {
                        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
                        'User-Agent': 'jwpro-rss-reader/1.0',
                    },
                    responseType: 'text',
                    timeout: 5000,
                })
                all.push(...parseItems(xml, source, category))
            }
            catch (err) {
                console.warn(`[rss] Failed to fetch "${source}" (${url}):`, err)
            }
        }),
    )

    all.sort((a, b) => (b.date > a.date ? 1 : -1))

    // Drop anything older than 3 months; items with no date are kept
    const threshold = cutoffDate(3)
    return all.filter(item => !item.date || item.date >= threshold)
})
