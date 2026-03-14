<template>
  <div class="app-shell">
    <AppHeader />

    <div class="main-content-wrapper">
      <BackgroundWaves />
      <main class="main-content">
        <!-- Hero Section -->
        <section class="hero">
          <h1 class="hero-title">Jacqueline Williams</h1>
          <p class="hero-subtitle">
            <span ref="activityRef" class="typed-text"></span>
          </p>
        </section>

      <!-- Project Carousel -->
      <section class="carousel-section">
        <div class="carousel-container">
          <button
            class="carousel-arrow carousel-arrow-left"
            @click="prevProject"
            :disabled="currentIndex === 0"
            aria-label="Previous project"
          >
            <Icon icon="lucide:chevron-left" width="24" height="24" />
          </button>

          <div class="carousel-track" @touchstart.passive="onTouchStart" @touchend="onTouchEnd">
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="project-card"
              :class="{ active: index === currentIndex }"
            >
              <div class="card-media">
                <img :src="project.image" :alt="project.title" />
                <div v-if="project.showTitle" class="card-media-title">{{ project.label }}</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">{{ project.title }}</h3>
                <div class="card-actions">
                  <a v-if="project.github" :href="project.github" class="btn-icon" target="_blank" rel="noopener" aria-label="View on GitHub">
                    <Icon icon="mdi:github" width="20" height="20" />
                  </a>
                  <NuxtLink v-if="project.demo && project.demo.startsWith('/')" :to="project.demo" class="btn btn-primary">
                    Live Demo
                    <Icon icon="lucide:arrow-right" width="16" height="16" />
                  </NuxtLink>
                  <a v-else-if="project.demo" :href="project.demo" class="btn btn-primary" target="_blank" rel="noopener">
                    Live Demo
                    <Icon icon="lucide:external-link" width="16" height="16" />
                  </a>
                </div>
                <p class="card-description">{{ project.description }}</p>
              </div>
            </div>
          </div>

          <button
            class="carousel-arrow carousel-arrow-right"
            @click="nextProject"
            :disabled="currentIndex === projects.length - 1"
            aria-label="Next project"
          >
            <Icon icon="lucide:chevron-right" width="24" height="24" />
          </button>
        </div>

        <!-- Dot Indicators -->
        <div class="carousel-dots">
          <button
            v-for="(project, index) in projects"
            :key="`dot-${project.id}`"
            class="carousel-dot"
            :class="{ active: index === currentIndex }"
            @click="goToProject(index)"
            :aria-label="`Go to project ${index + 1}`"
          />
        </div>
      </section>
      </main>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import BackgroundWaves from '~/components/BackgroundWaves.vue'

// ── Carousel state ────────────────────────────────────────────────
const currentIndex = ref(0)

const projects = ref([
  {
    id: 1,
    title: 'Planisphere',
    description: 'Interactive digital planisphere built with D3.js — rotate the sky wheel to explore constellations visible from any latitude on any night of the year.',
    image: '/thumbnails/planisphere.png',
    showTitle: true,
    label: 'Planisphere',
    titleColor: '#7dd3fc',
    github: 'https://github.com/jw-rae/planisphere',
    demo: '/projects/planisphere'
  },
  {
    id: 2,
    title: 'Digital Terrain Model Viewer',
    description: 'Browser-based viewer for high-resolution USGS GeoTIFF Digital Terrain Models. Visualise and analyse elevation data with hillshading, colour ramps, and contour overlays — no backend required.',
    image: '/thumbnails/dtm-viewer.png',
    showTitle: true,
    label: 'DTM Viewer',
    titleColor: '#4ade80',
    github: 'https://github.com/jw-rae/digital-terrain-model-viewer',
    demo: '/projects/digital-terrain-model-viewer'
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'More projects are on the way.',
    image: 'https://placehold.co/640x360/1e293b/475569?text=Coming+Soon',
    showTitle: false,
    github: '',
    demo: ''
  },
])

const nextProject = () => {
  if (currentIndex.value < projects.value.length - 1) currentIndex.value++
}
const prevProject = () => {
  if (currentIndex.value > 0) currentIndex.value--
}
const goToProject = (index) => {
  currentIndex.value = index
}

// ── Swipe support ─────────────────────────────────────────────────
const touchStartX = ref(0)
const touchStartY = ref(0)
const SWIPE_THRESHOLD = 50

const onTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
}

const onTouchEnd = (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX.value
  const dy = e.changedTouches[0].clientY - touchStartY.value
  if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
  if (dx < 0) nextProject()
  else prevProject()
}

// ── RSS warmup (for faster News tab) ─────────────────────────────
const { fetchSnapshot, refreshByCategory } = useRssFeedCache()

const warmRssFeeds = () => {
  const run = async () => {
    await Promise.allSettled([
      fetchSnapshot(),
      refreshByCategory({ force: true }),
    ])
  }

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => {
      void run()
    }, { timeout: 1200 })
    return
  }

  window.setTimeout(() => {
    void run()
  }, 250)
}

// ── Typing animation ──────────────────────────────────────────────
const activityRef = ref(null)

const activities = [
  'Cloud Engineer',
  'Solutions Architect',
  'DevOps',
  'Full-stack Developer',
  'Consultant',
  'GIS Engineer',
  'SysAdmin'
]

let actIndex = 0
let charIndex = 0
let typing = true
let typingTimer = null

function typeActivity () {
  const el = activityRef.value
  if (!el) return

  if (typing) {
    if (charIndex < activities[actIndex].length) {
      el.textContent += activities[actIndex][charIndex++]
      typingTimer = setTimeout(typeActivity, 80)
    } else {
      typing = false
      typingTimer = setTimeout(typeActivity, 1000)
    }
  } else {
    if (charIndex > 0) {
      el.textContent = activities[actIndex].slice(0, --charIndex)
      typingTimer = setTimeout(typeActivity, 40)
    } else {
      typing = true
      actIndex = (actIndex + 1) % activities.length
      typingTimer = setTimeout(typeActivity, 400)
    }
  }
}

// ── Lifecycle ─────────────────────────────────────────────────────
onMounted(() => {
  typeActivity()
  warmRssFeeds()

  const handleKeydown = (e) => {
    if (e.key === 'ArrowLeft') prevProject()
    else if (e.key === 'ArrowRight') nextProject()
  }
  window.addEventListener('keydown', handleKeydown)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    clearTimeout(typingTimer)
  })
})

// ── SEO ───────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Jacqueline Williams | GIS Architect & Cloud Engineer',
  description: 'Portfolio of Jacqueline Williams - GIS Architect and Cloud Engineer specializing in spatial data solutions and cloud infrastructure.',
  ogTitle: 'Jacqueline Williams | GIS Architect & Cloud Engineer',
  ogDescription: 'Portfolio showcasing GIS architecture, cloud engineering, and spatial data projects.',
})
</script>

<style scoped>
/* ── App Shell ──────────────────────────────────────────────────── */
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

/* ── Main Content Wrapper ──────────────────────────────────────── */
.main-content-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Main Content ───────────────────────────────────────────────── */
.main-content {
  position: relative;
  z-index: 1;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Hero ───────────────────────────────────────────────────────── */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-md) var(--space-lg) var(--space-xs);
  flex-shrink: 0;
}

.hero-title {
  font-size: clamp(2.2rem, 4vw, 4.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
  line-height: var(--line-height-tight);
}

.hero-subtitle {
  --subtitle-accent: color-mix(in srgb, var(--color-brand-primary-500) 38%, var(--color-text-primary) 62%);
  font-size: clamp(1.15rem, 2.4vw, 2.15rem);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.018em;
  line-height: 1.35;
  height: calc(1em * 1.35);
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-subtitle::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(92vw, 24ch);
  height: 0.28em;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    color-mix(in srgb, var(--subtitle-accent) 12%, transparent) 22%,
    color-mix(in srgb, var(--subtitle-accent) 45%, white 55%) 50%,
    color-mix(in srgb, var(--subtitle-accent) 12%, transparent) 78%,
    transparent 100%
  );
  background-size: 220% 100%;
  background-position: 0% 50%;
  filter: blur(9px);
  opacity: 0.42;
  pointer-events: none;
  z-index: 0;
  animation: subtitleBacklightSweep 5.2s ease-in-out infinite;
}

.typed-text {
  white-space: nowrap;
  position: relative;
  z-index: 1;
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.55),
    0 0 8px color-mix(in srgb, var(--subtitle-accent) 24%, transparent);
  animation: subtitleTone 3s ease-in-out infinite;
}

@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .typed-text {
    background-image: linear-gradient(
      100deg,
      var(--color-text-primary) 0%,
      color-mix(in srgb, var(--subtitle-accent) 42%, var(--color-text-primary) 58%) 44%,
      var(--color-text-primary) 74%,
      color-mix(in srgb, var(--subtitle-accent) 28%, var(--color-text-primary) 72%) 100%
    );
    background-size: 240% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 0.25px color-mix(in srgb, var(--subtitle-accent) 28%, transparent);
    color: transparent;
    animation: subtitleTone 3s ease-in-out infinite, subtitleShimmer 8.5s linear infinite;
  }
}

@keyframes subtitleTone {
  0%, 100% {
    opacity: 0.96;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.06);
  }
}

@keyframes subtitleShimmer {
  from { background-position: 0% 50%; }
  to { background-position: 240% 50%; }
}

@keyframes subtitleBacklightSweep {
  0%, 100% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.5;
  }
}

/* ── Carousel Section ───────────────────────────────────────────── */
.carousel-section {
  flex: 1;
  padding: var(--space-xs) var(--space-lg) var(--space-md);
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  flex: 1;
  min-height: 0;
  max-height: 100%;
}

.carousel-track {
  position: relative;
  width: 100%;
  touch-action: pan-y;
  /* Never wider than what fits vertically: image is 16:9, card content ~130px, hero+chrome ~250px */
  max-width: min(420px, calc((100dvh - 390px) * 16 / 9));
  overflow: visible;
}

.project-card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  display: none;
  box-shadow: var(--shadow-md);
}

.project-card.active {
  display: block;
  animation: fadeIn var(--duration-200) var(--ease-out);
  box-shadow: var(--shadow-lg);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.card-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--color-surface-secondary);
  position: relative;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-media-title {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 560;
  color: color-mix(in srgb, var(--color-text-primary) 76%, #c8d0da 24%);
  text-shadow:
    0 1px 0 rgba(20, 24, 30, 0.32),
    0 0 10px rgba(180, 193, 208, 0.18);
  letter-spacing: 0.02em;
  pointer-events: none;
  animation: projectTitlePulse 4.2s ease-in-out infinite;
}

@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .card-media-title {
    background-image: linear-gradient(
      100deg,
      #87919e 0%,
      #dfe5ec 28%,
      #a3adba 55%,
      #f2f5f8 77%,
      #87919e 100%
    );
    background-size: 260% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: projectTitlePulse 4.2s ease-in-out infinite, projectTitleSheen 8.5s linear infinite;
  }
}

@keyframes projectTitlePulse {
  0%, 100% { opacity: 0.9; filter: saturate(78%); }
  50% { opacity: 1; filter: saturate(92%); }
}

@keyframes projectTitleSheen {
  from { background-position: 0% 50%; }
  to { background-position: 260% 50%; }
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: var(--space-sm);
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: 0;
}

.card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
  margin-top: var(--space-xs);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.card-actions .btn {
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--font-size-sm);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-full);
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-primary);
  transition: all var(--duration-200) var(--ease-out);
  text-decoration: none;
}

.btn-icon:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  border-color: var(--color-border-interactive);
}

.carousel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-full);
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--duration-200) var(--ease-out);
  flex-shrink: 0;
}

.carousel-arrow:hover:not(:disabled) {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  border-color: var(--color-border-interactive);
  box-shadow: var(--shadow-md);
  transform: scale(1.05);
}

.carousel-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-top: var(--space-xs);
  margin-bottom: var(--space-sm);
  flex-shrink: 0;
  padding-bottom: var(--space-xs);
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--border-radius-full);
  background: var(--color-surface-tertiary);
  border: none;
  cursor: pointer;
  transition: all var(--duration-200) var(--ease-out);
  padding: 0;
}

.carousel-dot.active {
  background: var(--color-brand-primary-500);
  width: 24px;
}

.carousel-dot:hover:not(.active) {
  background: var(--color-surface-secondary);
  box-shadow: var(--shadow-sm);
}

/* ── Responsive ─────────────────────────────────────────────────── */

/* Compact laptops and short desktop displays */
@media (max-height: 860px) {
  .hero {
    padding: var(--space-sm) var(--space-lg) var(--space-xs);
  }

  .hero-title {
    font-size: clamp(1.9rem, 3.2vw, 3.4rem);
  }

  .hero-subtitle {
    font-size: clamp(1.02rem, 1.85vw, 1.5rem);
    height: calc(1em * 1.35);
  }

  .carousel-section {
    padding: 0 var(--space-lg) var(--space-xs);
  }

  .carousel-track {
    max-width: min(390px, calc((100dvh - 320px) * 16 / 9));
  }

  .card-description {
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }
}

/* Extremely short viewports fallback to a scrollable main panel */
@media (max-height: 720px) {
  .main-content {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .hero {
    padding: var(--space-xs) var(--space-md) 0;
  }

  .hero-title {
    font-size: clamp(1.6rem, 3.8vw, 2.4rem);
    margin-bottom: 0;
  }

  .hero-subtitle {
    font-size: clamp(0.92rem, 1.65vw, 1.2rem);
    height: calc(1em * 1.35);
  }

  .carousel-section {
    padding: 0 var(--space-md) var(--space-xs);
  }

  .carousel-container {
    gap: var(--space-sm);
  }

  .carousel-track {
    max-width: min(340px, calc((100dvh - 250px) * 16 / 9));
  }

  .card-content {
    padding: var(--space-xs) var(--space-sm);
  }

  .card-title {
    font-size: var(--font-size-base);
    margin-bottom: var(--space-xs);
  }

  .card-description {
    margin-bottom: var(--space-xs);
  }

  .card-actions {
    gap: var(--space-sm);
  }

  .card-actions .btn {
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
  }

  .carousel-dots {
    gap: var(--space-xs);
    margin-bottom: 0;
    padding-bottom: 0;
  }
}

/* Large screens: let the card expand more */
@media (min-width: 1400px) {
  .carousel-track { max-width: min(620px, calc((100dvh - 380px) * 16 / 9)); }
  .hero { padding: var(--space-xl) var(--space-lg) var(--space-sm); }
}

/* Tablet landscape */
@media (max-width: 1024px) {
  .carousel-container { gap: var(--space-md); }
  .carousel-arrow { width: 36px; height: 36px; }
}

/* Tablet portrait / large phone */
@media (max-width: 768px) {
  .hero { padding: var(--space-md) var(--space-sm) var(--space-xs); }
  .carousel-arrow { width: 32px; height: 32px; }
  .carousel-arrow svg { width: 18px; height: 18px; }
  .carousel-section { padding: var(--space-sm) var(--space-sm) var(--space-md); }
  .carousel-container { gap: var(--space-sm); }
  .carousel-track { max-width: 100%; }
  .card-content { padding: var(--space-sm); }
  .card-title { font-size: var(--font-size-base); margin-bottom: var(--space-xs); }
  .card-description { font-size: var(--font-size-xs); margin-bottom: var(--space-sm); }
  .card-actions { gap: var(--space-sm); }
  .btn-icon { width: 32px; height: 32px; }
  .carousel-dots { margin-top: var(--space-xs); }
}

/* Small phones */
@media (max-width: 480px) {
  .hero { padding: var(--space-sm) var(--space-sm) var(--space-xs); }
  .carousel-container { gap: var(--space-xs); }
  .carousel-arrow { width: 28px; height: 28px; }
}
</style>
