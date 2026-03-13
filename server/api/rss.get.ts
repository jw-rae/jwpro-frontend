/**
 * GET /api/rss[?category=<name>]
 *
 * Returns sorted RSS items. When `category` is provided, only fetches that
 * category's feeds — allowing the client to parallelise per-category.
 * Responses are cached per category for 5 minutes (stale-while-revalidate).
 */

export default defineCachedEventHandler(async (event) => {
    // Tell the browser (and any CDN in front) to cache per-category responses.
    // max-age=300 → serve from cache for 5 min; stale-while-revalidate=600 →
    // serve stale instantly for up to 10 more min while refreshing in background.
    setResponseHeader(event, 'Cache-Control', 'public, max-age=300, stale-while-revalidate=600')

    const query = getQuery(event)
    const category = typeof query.category === 'string' ? query.category : undefined

    const feeds = category
        ? RSS_FEEDS.filter(f => f.category === category)
        : RSS_FEEDS

    const all: RSSItem[] = []

    await Promise.allSettled(
        feeds.map(async ({ url, source, category: cat }) => {
            try {
                const xml = await $fetch<string>(url, {
                    headers: {
                        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
                        'User-Agent': 'jwpro-rss-reader/1.0',
                    },
                    responseType: 'text',
                    timeout: 5000,
                })
                all.push(...parseItems(xml, source, cat))
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
}, {
    maxAge: 300,       // serve cached result for 5 min
    staleMaxAge: -1,   // serve stale immediately while revalidating in background
    getKey: (event) => {
        const query = getQuery(event)
        const category = typeof query.category === 'string' ? query.category : 'all'
        return `rss-${category}`
    },
})
