<template>
  <div class="page-shell">
    <AppHeader @lang-change="onLangChange" />

    <main class="main-content">
      <div class="container">

        <!-- Filters -->
        <div v-if="data.length > 0" class="filters">
          <!-- Category pills -->
          <div class="category-pills" role="group" aria-label="Filter by category">
            <button
              v-for="cat in categoryOptions"
              :key="cat.value"
              class="pill"
              :class="{ active: selectedCategory === cat.value }"
              @click="selectCategory(cat.value)"
            >
              <Icon :icon="cat.icon" width="13" height="13" />
              {{ cat.label }}
            </button>
          </div>

          <!-- Source dropdown -->
          <div class="source-filter" ref="sourceMenuRef">
            <button
              class="source-toggle"
              :class="{ active: selectedSources.size > 0 }"
              @click="sourceMenuOpen = !sourceMenuOpen"
              aria-haspopup="listbox"
            >
              <Icon icon="lucide:rss" width="13" height="13" />
              {{ selectedSources.size > 0 ? `${selectedSources.size} source${selectedSources.size > 1 ? 's' : ''}` : 'All sources' }}
              <Icon icon="lucide:chevron-down" width="13" height="13" class="chevron" :class="{ open: sourceMenuOpen }" />
            </button>

            <div v-if="sourceMenuOpen" class="source-menu" role="listbox" aria-multiselectable="true">
              <button
                v-if="selectedSources.size > 0"
                class="source-clear"
                @click="selectedSources = new Set(); resetLimit()"
              >
                Clear selection
              </button>
              <label
                v-for="src in availableSources"
                :key="src"
                class="source-option"
                :class="{ checked: selectedSources.has(src) }"
              >
                <input
                  type="checkbox"
                  :checked="selectedSources.has(src)"
                  @change="toggleSource(src)"
                  class="source-checkbox"
                />
                <span>{{ src }}</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Result count -->
        <p v-if="data.length > 0" class="result-count">
          {{ visibleData.length }} / {{ filteredData.length }} {{ filteredData.length === 1 ? 'entry' : 'entries' }}
          <span v-if="pending" class="streaming-badge">
            <span class="status-dot loading-dot" aria-hidden="true" />
            streaming…
          </span>
        </p>

        <!-- Initial loading (no items yet) -->
        <div v-if="pending && data.length === 0" class="status-block">
          <span class="status-dot loading-dot" aria-hidden="true" />
          <p class="status-text">{{ ui.loading }}</p>
        </div>

        <!-- Error (no items received) -->
        <div v-else-if="error && data.length === 0" class="status-block">
          <Icon icon="lucide:wifi-off" width="20" height="20" class="status-icon error-icon" />
          <p class="status-text">{{ ui.error }}</p>
        </div>

        <!-- Empty (stream finished, nothing received) -->
        <div v-else-if="!pending && data.length === 0" class="status-block">
          <Icon icon="lucide:rss" width="20" height="20" class="status-icon" />
          <p class="status-text">{{ ui.empty }}</p>
        </div>

        <!-- Feed list (shown as soon as first items arrive) -->
        <template v-if="data.length > 0">
          <!-- No results after filtering -->
          <div v-if="filteredData.length === 0" class="status-block">
            <Icon icon="lucide:search-x" width="20" height="20" class="status-icon" />
            <p class="status-text">No entries match the current filters.</p>
          </div>

          <ol v-else class="feed-list" aria-label="Industry Radar feed">
            <li
              v-for="item in visibleData"
              :key="item.link + item.date"
              class="feed-item"
              :class="{ 'feed-item--slim': !item.description }"
            >
              <div class="item-top">
                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item-title"
                >
                  {{ item.title }}
                  <Icon icon="lucide:external-link" width="11" height="11" class="external-icon" aria-hidden="true" />
                </a>
                <div class="item-meta">
                  <span class="meta-source">{{ item.source }}</span>
                  <span class="meta-dot" aria-hidden="true">·</span>
                  <time :datetime="item.date" class="meta-date">{{ item.date }}</time>
                </div>
              </div>
              <p v-if="item.description" class="item-description">
                {{ item.description }}
              </p>
            </li>
          </ol>

          <!-- Load more -->
          <div v-if="hasMore" class="load-more-wrap">
            <button class="load-more-btn" @click="loadMore">
              <Icon icon="lucide:chevron-down" width="14" height="14" />
              Load {{ Math.min(50, filteredData.length - displayLimit) }} more
            </button>
          </div>
        </template>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// ── i18n ─────────────────────────────────────────────────────────────────────

const translations = {
  en: {
    title: 'Industry Radar',
    subtitle: 'Curated updates from the tech landscape.',
    loading: 'Loading feeds…',
    error: 'Unable to load feeds right now. Try again later.',
    empty: 'No items found.',
  },
  fr: {
    title: 'Radar Industrie',
    subtitle: 'Veille technologique sélectionnée.',
    loading: 'Chargement des flux…',
    error: 'Impossible de charger les flux. Réessayez plus tard.',
    empty: 'Aucun article trouvé.',
  },
}

const lang = ref('en')

onMounted(() => {
  const stored = localStorage.getItem('lang')
  if (stored === 'fr' || stored === 'en') lang.value = stored

  const handleOutside = (e) => {
    if (sourceMenuOpen.value && sourceMenuRef.value && !sourceMenuRef.value.contains(e.target)) {
      sourceMenuOpen.value = false
    }
  }
  document.addEventListener('mousedown', handleOutside)
  onUnmounted(() => document.removeEventListener('mousedown', handleOutside))
})

const onLangChange = (l) => { lang.value = l }
const ui = computed(() => translations[lang.value] ?? translations.en)

// ── Category ──────────────────────────────────────────────────────────────────

const categoryOptions = [
  { value: 'all',       label: 'All',       icon: 'lucide:layout-list' },
  { value: 'Cloud',     label: 'Cloud',     icon: 'lucide:cloud' },

  { value: 'GIS',       label: 'GIS',       icon: 'lucide:map' },
  { value: 'Security',  label: 'Security',  icon: 'lucide:shield-alert' },
  { value: 'Tech Blog', label: 'Tech Blog', icon: 'lucide:code-2' },
  { value: 'Tech News', label: 'Tech News', icon: 'lucide:newspaper' },
]

const selectedCategory = ref('all')

// ── Data (EventSource streaming) ────────────────────────────────────────────

const data = ref([])
const pending = ref(true)
const error = ref(null)

onMounted(() => {
  const es = new EventSource('/api/rss-stream')

  es.addEventListener('items', (e) => {
    const items = JSON.parse(e.data)
    data.value = [...data.value, ...items].sort((a, b) =>
      b.date > a.date ? 1 : b.date < a.date ? -1 : 0,
    )
  })

  es.addEventListener('done', () => {
    pending.value = false
    es.close()
  })

  es.onerror = () => {
    if (data.value.length === 0) error.value = new Error('Stream failed')
    pending.value = false
    es.close()
  }

  onUnmounted(() => es.close())
})

// ── Source filter & display limit ─────────────────────────────────────────────

let selectedSources = ref(new Set())
const sourceMenuOpen = ref(false)
const sourceMenuRef = ref(null)
const displayLimit = ref(50)

const resetLimit = () => { displayLimit.value = 50 }

const selectCategory = (cat) => {
  selectedCategory.value = cat
  selectedSources.value = new Set()
  resetLimit()
}

const availableSources = computed(() => {
  const items = selectedCategory.value === 'all'
    ? data.value
    : data.value.filter(i => i.category === selectedCategory.value)
  return [...new Set(items.map(i => i.source))].sort()
})

const toggleSource = (src) => {
  const next = new Set(selectedSources.value)
  if (next.has(src)) next.delete(src)
  else next.add(src)
  selectedSources.value = next
  resetLimit()
}

/** Round-robin interleave items across sources so no single source dominates. */
function balanceSources(items) {
  const buckets = new Map()
  for (const item of items) {
    if (!buckets.has(item.source)) buckets.set(item.source, [])
    buckets.get(item.source).push(item)
  }
  const result = []
  const queues = [...buckets.values()]
  let i = 0
  while (result.length < items.length) {
    const q = queues[i % queues.length]
    if (q.length) result.push(q.shift())
    i++
    if (queues.every(q => q.length === 0)) break
  }
  return result
}

const filteredData = computed(() => {
  const base = data.value.filter(item => {
    const catOk = selectedCategory.value === 'all' || item.category === selectedCategory.value
    const srcOk = selectedSources.value.size === 0 || selectedSources.value.has(item.source)
    return catOk && srcOk
  })
  // In the All view (no source filter), interleave sources so feed is balanced
  if (selectedCategory.value === 'all' && selectedSources.value.size === 0) {
    return balanceSources(base)
  }
  return base
})

const visibleData = computed(() => filteredData.value.slice(0, displayLimit.value))
const hasMore = computed(() => displayLimit.value < filteredData.value.length)
const loadMore = () => { displayLimit.value += 50 }

// ── SEO ───────────────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Industry Radar — JWPRO',
  description: 'Curated updates from GIS, security, and cloud engineering feeds.',
})
</script>

<style scoped>
/* ── Shell ───────────────────────────────────────────────────────────────── */
.page-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding-left: var(--space-lg);
  padding-right: var(--space-lg);
}

/* ── Container ───────────────────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: var(--space-4xl) 0 var(--space-4xl);
}

/* ── Page header ─────────────────────────────────────────────────────────── */

/* ── Status states ───────────────────────────────────────────────────────── */
.status-block {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-2xl) 0;
}

.status-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.status-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.error-icon {
  color: var(--color-status-error, #ef4444);
}

/* Pulsing dot for loading */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-brand-primary-500);
  flex-shrink: 0;
}

.loading-dot {
  animation: pulse-dot 1.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.75); }
}

/* ── Filters bar ─────────────────────────────────────────────────────────── */
.filters {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-lg);
}

/* Category pills */
.category-pills {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
  flex: 1 1 auto;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px var(--space-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border-primary);
  border-radius: 999px;
  cursor: pointer;
  transition: all var(--duration-200) var(--ease-out);
  white-space: nowrap;
  line-height: 1;
}

.pill:hover {
  border-color: var(--color-border-interactive);
  color: var(--color-text-primary);
}

.pill.active {
  background: var(--color-brand-primary-500);
  border-color: var(--color-brand-primary-500);
  color: #fff;
}

/* Source dropdown */
.source-filter {
  position: relative;
  flex-shrink: 0;
}

.source-toggle {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px var(--space-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border-primary);
  border-radius: 999px;
  cursor: pointer;
  transition: all var(--duration-200) var(--ease-out);
  white-space: nowrap;
  line-height: 1;
}

.source-toggle:hover {
  border-color: var(--color-border-interactive);
  color: var(--color-text-primary);
}

.source-toggle.active {
  border-color: var(--color-brand-primary-500);
  color: var(--color-brand-primary-500);
}

.chevron {
  transition: transform var(--duration-200) var(--ease-out);
}
.chevron.open {
  transform: rotate(180deg);
}

.source-menu {
  position: absolute;
  top: calc(100% + var(--space-xs));
  right: 0;
  z-index: 50;
  min-width: 200px;
  max-height: 320px;
  overflow-y: auto;
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  padding: var(--space-xs) 0;
}

.source-clear {
  display: block;
  width: 100%;
  text-align: left;
  padding: var(--space-xs) var(--space-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-brand-primary-500);
  background: none;
  border: none;
  border-bottom: 1px solid var(--color-border-primary);
  cursor: pointer;
  margin-bottom: var(--space-xs);
}

.source-clear:hover {
  background: var(--color-surface-secondary);
}

.source-option {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-md);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background var(--duration-200) var(--ease-out);
}

.source-option:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.source-option.checked {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

.source-checkbox {
  accent-color: var(--color-brand-primary-500);
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

/* Result count */
.result-count {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

/* Inline streaming indicator next to result count */
.streaming-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: var(--font-size-xs);
  color: var(--color-brand-primary-500);
  font-weight: var(--font-weight-medium);
}

/* ── Feed list ────────────────────────────────────────────────────────────── */
.feed-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* ── Feed item ───────────────────────────────────────────────────────────── */
.feed-item {
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-2xl, 1rem);
  transition: background var(--duration-200) var(--ease-out);
}

/* Compact size — no description */
.feed-item--slim {
  padding-top: 6px;
  padding-bottom: 6px;
}

.feed-item:hover {
  background: var(--color-surface-secondary);
}

/* Top row: title + meta side by side */
.item-top {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

/* Title / link */
.item-title {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  text-decoration: none;
  line-height: var(--line-height-tight);
  flex: 1 1 0;
  min-width: 0;
  transition: color var(--duration-200) var(--ease-out);
}

.item-title:hover {
  color: var(--color-brand-primary-500);
}

.external-icon {
  flex-shrink: 0;
  opacity: 0;
  transition: opacity var(--duration-200) var(--ease-out);
  align-self: center;
}

.item-title:hover .external-icon {
  opacity: 1;
}

/* Metadata — pinned to the right of the title */
.item-meta {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex-shrink: 0;
  white-space: nowrap;
}

.meta-source {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-brand-primary-500);
  letter-spacing: 0.03em;
}

.meta-dot {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  user-select: none;
}

.meta-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums;
}

/* Description — full width below the top row */
.item-description {
  margin-top: var(--space-2xs);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-tertiary);
  width: 100%;

  /* Single-line truncation */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Load more ───────────────────────────────────────────────────────────── */
.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 6px var(--space-lg);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border-primary);
  border-radius: 999px;
  cursor: pointer;
  transition: all var(--duration-200) var(--ease-out);
}

.load-more-btn:hover {
  border-color: var(--color-border-interactive);
  color: var(--color-text-primary);
  background: var(--color-surface-secondary);
}

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-title {
    font-size: var(--font-size-2xl);
  }

  .container {
    padding: var(--space-2xl) 0;
  }

  .item-top {
    flex-direction: column;
    gap: var(--space-2xs);
  }

  .item-meta {
    white-space: normal;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }
}
</style>
