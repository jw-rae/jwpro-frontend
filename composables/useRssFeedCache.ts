import { computed } from 'vue'

export interface RssFeedItem {
    title: string
    link: string
    source: string
    category: string
    date: string
    description: string
}

const FEED_CATEGORIES = ['Cloud', 'GIS', 'Security', 'Tech Blog', 'Tech News']
const RSS_CACHE_TTL_MS = 5 * 60 * 1000
let snapshotTask: Promise<void> | null = null
let refreshTask: Promise<void> | null = null

const sortByDateDesc = (items: RssFeedItem[]): RssFeedItem[] => {
    return [...items].sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0))
}

const mergeUniqueItems = (existing: RssFeedItem[], incoming: RssFeedItem[]): RssFeedItem[] => {
    const unique = new Map<string, RssFeedItem>()
    for (const item of [...existing, ...incoming]) {
        const key = `${item.link}|${item.date}|${item.source}`
        unique.set(key, item)
    }
    return sortByDateDesc([...unique.values()])
}

export function useRssFeedCache() {
    const items = useState<RssFeedItem[]>('rss-feed-cache:items', () => [])
    const lastWarmAt = useState<number>('rss-feed-cache:last-warm-at', () => 0)
    const snapshotPending = useState<boolean>('rss-feed-cache:snapshot-pending', () => false)
    const refreshPending = useState<boolean>('rss-feed-cache:refresh-pending', () => false)

    const hasFreshCache = computed(() => {
        return items.value.length > 0 && Date.now() - lastWarmAt.value < RSS_CACHE_TTL_MS
    })

    const merge = (incoming: RssFeedItem[]): void => {
        if (!Array.isArray(incoming) || incoming.length === 0) return
        items.value = mergeUniqueItems(items.value, incoming)
    }

    const fetchSnapshot = async (force = false): Promise<void> => {
        if (!force && hasFreshCache.value) return
        if (snapshotTask) return snapshotTask

        snapshotTask = (async () => {
            snapshotPending.value = true
            try {
                const snapshot = await $fetch<RssFeedItem[]>('/api/rss')
                if (Array.isArray(snapshot) && snapshot.length > 0) {
                    merge(snapshot)
                    lastWarmAt.value = Date.now()
                }
            }
            catch {
                // Snapshot can fail while category refresh still succeeds.
            }
            finally {
                snapshotPending.value = false
            }
        })()

        try {
            await snapshotTask
        }
        finally {
            snapshotTask = null
        }
    }

    const refreshByCategory = async (
        options: { force?: boolean; onChunk?: (items: RssFeedItem[]) => void } = {},
    ): Promise<void> => {
        const { force = false, onChunk } = options
        if (!force && hasFreshCache.value) return
        if (refreshTask) return refreshTask

        refreshTask = (async () => {
            refreshPending.value = true
            try {
                await Promise.allSettled(
                    FEED_CATEGORIES.map(async (cat) => {
                        try {
                            const incoming = await $fetch<RssFeedItem[]>(`/api/rss?category=${encodeURIComponent(cat)}`)
                            if (Array.isArray(incoming) && incoming.length > 0) {
                                merge(incoming)
                                onChunk?.(incoming)
                            }
                        }
                        catch {
                            // Individual category failures should not block others.
                        }
                    }),
                )

                if (items.value.length > 0) {
                    lastWarmAt.value = Date.now()
                }
            }
            finally {
                refreshPending.value = false
            }
        })()

        try {
            await refreshTask
        }
        finally {
            refreshTask = null
        }
    }

    return {
        items,
        snapshotPending,
        refreshPending,
        hasFreshCache,
        fetchSnapshot,
        refreshByCategory,
    }
}
