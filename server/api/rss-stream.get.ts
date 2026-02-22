/**
 * GET /api/rss-stream
 *
 * Server-Sent Events endpoint. Each feed resolves independently; items are
 * pushed to the client immediately so the UI can render progressively.
 *
 * Event format:
 *   event: items
 *   data: <JSON array of RSSItem>
 *
 *   event: done
 *   data: {}
 */

export default defineEventHandler((event) => {
    setResponseHeaders(event, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no', // disable nginx buffering if present
    })

    const encoder = new TextEncoder()
    let ctrl!: ReadableStreamDefaultController<Uint8Array>

    const stream = new ReadableStream<Uint8Array>({
        start(c) { ctrl = c },
    })

    const pushItems = (items: RSSItem[]) => {
        if (!items.length) return
        const msg = `event: items\ndata: ${JSON.stringify(items)}\n\n`
        ctrl.enqueue(encoder.encode(msg))
    }

        ; (async () => {
            const threshold = cutoffDate(3)

            const filter = (items: RSSItem[]): RSSItem[] =>
                items.filter(i => !i.date || i.date >= threshold)

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
                        pushItems(filter(parseItems(xml, source, category)))
                    }
                    catch (err) {
                        console.warn(`[rss-stream] Failed: "${source}" (${url}):`, err)
                    }
                }),
            )

            ctrl.enqueue(encoder.encode('event: done\ndata: {}\n\n'))
            ctrl.close()
        })()

    return sendStream(event, stream)
})
