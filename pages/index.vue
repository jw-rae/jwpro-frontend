 <template>
  <div class="app-shell">
    <!-- Header -->
    <header class="header">
      <div class="header-container">
        <div class="header-left">
          <span class="brand-primary">JWPRO.NET</span>
        </div>
        <nav class="header-nav">
          <a href="#about" class="nav-link">About</a>
          <a href="#rss" class="nav-link">RSS</a>
          <a href="#pomodoro" class="nav-link">Pomodoro</a>
          <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>
          <div class="lang-switch">
            <button @click="setLang('en')" :class="{ active: lang === 'en' }" aria-label="English">EN</button>
            <span class="lang-divider">/</span>
            <button @click="setLang('fr')" :class="{ active: lang === 'fr' }" aria-label="French">FR</button>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero">
        <h1 class="hero-title">Jacqueline Williams</h1>
        <p class="hero-subtitle">GIS Architect & Cloud Engineer</p>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a :href="project.demo" class="btn btn-primary" target="_blank" rel="noopener">
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
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

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <span class="footer-copyright">© 2026 Jacqueline Williams</span>
        <div class="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State
const currentIndex = ref(0)
const lang = ref('en')

// Sample projects data
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

// Methods
const nextProject = () => {
  if (currentIndex.value < projects.value.length - 1) {
    currentIndex.value++
  }
}

const prevProject = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToProject = (index) => {
  currentIndex.value = index
}

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}

const setLang = (language) => {
  lang.value = language
}

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevProject()
    } else if (e.key === 'ArrowRight') {
      nextProject()
    }
  }
  window.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
})

// SEO
useSeoMeta({
  title: 'Jacqueline Williams | GIS Architect & Cloud Engineer',
  description: 'Portfolio of Jacqueline Williams - GIS Architect and Cloud Engineer specializing in spatial data solutions and cloud infrastructure.',
  ogTitle: 'Jacqueline Williams | GIS Architect & Cloud Engineer',
  ogDescription: 'Portfolio showcasing GIS architecture, cloud engineering, and spatial data projects.',
})
</script>

<style scoped>
/* App Shell Layout */
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* Header */
.header {
  flex-shrink: 0;
  height: var(--space-2xl);
  background: var(--color-surface-primary);
  border-bottom: 1px solid var(--color-border-primary);
  z-index: var(--z-index-50);
}

.header-container {
  height: 100%;
  padding: 0 var(--space-2xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
}

.brand-primary {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--duration-200) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: all var(--duration-200) var(--ease-out);
}

.theme-toggle:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.lang-switch button {
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: var(--space-xs);
  transition: color var(--duration-200) var(--ease-out);
}

.lang-switch button.active {
  color: var(--color-brand-primary-500);
}

.lang-switch button:hover {
  color: var(--color-text-primary);
}

.lang-divider {
  color: var(--color-text-tertiary);
}

/* Main Content */
.main-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
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
}

/* Carousel Section */
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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

/* Carousel Arrows */
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

.carousel-arrow-left,
.carousel-arrow-right {
  transition: all var(--duration-200) var(--ease-out);
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

/* Carousel Dots */
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

/* Footer */
.footer {
  flex-shrink: 0;
  height: calc(var(--space-2xl) + var(--space-md));
  background: var(--color-surface-primary);
  border-top: 1px solid var(--color-border-primary);
  z-index: var(--z-index-40);
}

.footer-container {
  height: 100%;
  padding: 0 var(--space-2xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-copyright {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.footer-links a {
  color: var(--color-text-secondary);
  transition: color var(--duration-200) var(--ease-out);
  display: flex;
  align-items: center;
}

.footer-links svg {
  width: 18px;
  height: 18px;
}

.footer-links a:hover {
  color: var(--color-brand-primary-500);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .carousel-container {
    gap: var(--space-md);
  }
  
  .carousel-arrow {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 768px) {
  .header {
    height: var(--space-2xl);
  }
  
  .header-container {
    padding: 0 var(--space-sm);
  }
  
  .hero {
    padding: var(--space-2xl) var(--space-sm) var(--space-lg);
  }
  
  .hero-title {
    font-size: var(--font-size-xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-sm);
  }
  
  .carousel-arrow {
    width: 32px;
    height: 32px;
  }
  
  .carousel-arrow svg {
    width: 18px;
    height: 18px;
  }
  
  .carousel-section {
    padding: var(--space-md) var(--space-sm);
    max-height: 60vh;
  }
  
  .carousel-container {
    gap: var(--space-sm);
  }
  
  .carousel-track {
    max-width: 100%;
  }
  
  .card-content {
    padding: var(--space-sm);
  }
  
  .card-title {
    font-size: var(--font-size-base);
    margin-bottom: var(--space-xs);
  }
  
  .card-description {
    font-size: var(--font-size-xs);
    margin-bottom: var(--space-sm);
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  
  .carousel-dots {
    margin-top: var(--space-sm);
  }
  
  .card-actions {
    gap: var(--space-sm);
  }
  
  .btn-icon {
    width: 32px;
    height: 32px;
  }
  
  .footer {
    height: calc(var(--space-2xl) + var(--space-md));
  }
  
  .footer-container {
    padding: 0 var(--space-sm);
    flex-direction: row;
  }
  
  .footer-copyright {
    font-size: var(--font-size-xs);
  }
  
  .footer-links {
    gap: var(--space-sm);
  }
}

@media (max-width: 480px) {
  .brand-primary {
    font-size: var(--font-size-base);
  }
  
  .header-nav {
    gap: var(--space-sm);
  }
  
  .nav-link {
    font-size: var(--font-size-xs);
  }
  
  .theme-toggle {
    width: 32px;
    height: 32px;
  }
  
  .footer-copyright {
    font-size: var(--font-size-xs);
  }
}
</style>
