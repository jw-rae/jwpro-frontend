<template>
  <div class="app-shell">
    <AppHeader />

    <!-- Main Content -->
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

          <div class="carousel-track">
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="project-card"
              :class="{ active: index === currentIndex }"
            >
              <div class="card-media">
                <img :src="project.image" :alt="project.title" />
              </div>
              <div class="card-content">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-description">{{ project.description }}</p>
                <div class="card-actions">
                  <a :href="project.github" class="btn-icon" target="_blank" rel="noopener" aria-label="View on GitHub">
                    <Icon icon="mdi:github" width="20" height="20" />
                  </a>
                  <a :href="project.demo" class="btn btn-primary" target="_blank" rel="noopener">
                    Live Demo
                    <Icon icon="lucide:external-link" width="16" height="16" />
                  </a>
                </div>
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

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// ── Carousel state ────────────────────────────────────────────────
const currentIndex = ref(0)

const projects = ref([
  {
    id: 1,
    title: 'Spatial Data Pipeline',
    description: 'Automated ETL pipeline processing geospatial data with Azure Functions, PostGIS, and real-time web mapping visualization.',
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Spatial+Pipeline',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 2,
    title: 'Cloud GIS Platform',
    description: 'Scalable web GIS application built with modern frameworks, handling millions of spatial features efficiently.',
    image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=GIS+Platform',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 3,
    title: 'Network Monitoring Dashboard',
    description: 'Real-time network monitoring with automated alerting and performance analytics for enterprise infrastructure.',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Network+Monitor',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
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
  overflow: hidden;
}

/* ── Main Content ───────────────────────────────────────────────── */
.main-content {
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
  padding: var(--space-2xl) var(--space-lg) var(--space-lg);
  flex-shrink: 0;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  line-height: var(--line-height-tight);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-normal);
  min-height: 1.5em;
}

.typed-text {
  white-space: nowrap;
}

/* ── Carousel Section ───────────────────────────────────────────── */
.carousel-section {
  flex: 1;
  padding: var(--space-md) var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 60vh;
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
  max-width: 480px;
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
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: var(--space-md);
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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
  width: 40px;
  height: 40px;
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
  margin-top: var(--space-md);
  flex-shrink: 0;
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
@media (max-width: 1024px) {
  .carousel-container { gap: var(--space-md); }
  .carousel-arrow { width: 36px; height: 36px; }
}

@media (max-width: 768px) {
  .hero { padding: var(--space-2xl) var(--space-sm) var(--space-lg); }
  .hero-title { font-size: var(--font-size-xl); }
  .hero-subtitle { font-size: var(--font-size-sm); }
  .carousel-arrow { width: 32px; height: 32px; }
  .carousel-arrow svg { width: 18px; height: 18px; }
  .carousel-section { padding: var(--space-md) var(--space-sm); max-height: 60vh; }
  .carousel-container { gap: var(--space-sm); }
  .carousel-track { max-width: 100%; }
  .card-content { padding: var(--space-sm); }
  .card-title { font-size: var(--font-size-base); margin-bottom: var(--space-xs); }
  .card-description { font-size: var(--font-size-xs); margin-bottom: var(--space-sm); -webkit-line-clamp: 2; line-clamp: 2; }
  .carousel-dots { margin-top: var(--space-sm); }
  .card-actions { gap: var(--space-sm); }
  .btn-icon { width: 32px; height: 32px; }
}
</style>
