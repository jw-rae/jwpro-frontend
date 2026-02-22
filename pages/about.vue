<template>
  <div class="page-shell">
    <AppHeader />

    <main class="main-content">
      <div class="container about-grid">

        <div class="about-columns">
          <!-- Left: Intro & Social -->
          <section class="section intro-section">
            <h1 class="name-heading">Jacqueline Williams</h1>
            <p class="subtitle">GIS Architect &amp; Cloud Engineer</p>
            <p class="location">
              <Icon icon="lucide:map-pin" width="14" height="14" class="pin-icon" />
              France
            </p>
            <p class="narrative">
              Designs resilient geospatial systems at the intersection of cloud, mapping, and infrastructure.
              Drawn to spatial intelligence and scalable architectures that remain legible over time.
              Works at the edge where engineering precision meets environmental complexity—
              building systems that serve both machines and the people who depend on them.
            </p>
            <div class="about-social">
              <a href="https://github.com/jw-rae" target="_blank" rel="noopener" aria-label="GitHub">
                <Icon icon="mdi:github" width="22" height="22" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/jacqueline-w" target="_blank" rel="noopener" aria-label="LinkedIn">
                <Icon icon="mdi:linkedin" width="22" height="22" />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
          <!-- Right: Experience, Education, Certifications -->
          <div class="about-main">
            <section class="section">
              <h2 class="section-label">Experience</h2>
              <article class="experience-item">
                <div class="exp-header">
                  <span class="exp-role">Software Engineer</span>
                  <span class="exp-org">Capgemini</span>
                </div>
                <p class="exp-meta">Paris Area · Cloud &amp; GIS Systems</p>
                <p class="exp-description">
                  Designed and delivered cloud-native geospatial solutions on Azure, integrating
                  spatial pipelines with enterprise infrastructure at scale.
                </p>
              </article>
              <article class="experience-item">
                <div class="exp-header">
                  <span class="exp-role">Web GIS Developer</span>
                  <span class="exp-org">Thales</span>
                </div>
                <p class="exp-meta">Defence &amp; Mapping Systems · 3D / 2D</p>
                <p class="exp-description">
                  Built interactive 3D and 2D web mapping interfaces for mission-critical
                  defence and situational awareness applications.
                </p>
              </article>
              <article class="experience-item">
                <div class="exp-header">
                  <span class="exp-role">GIS Developer</span>
                  <span class="exp-org">IGN — French Mapping Agency</span>
                </div>
                <p class="exp-meta">Spatial Analysis · Avalanche Risk Prediction</p>
                <p class="exp-description">
                  Contributed to avalanche risk modelling using national geodatasets,
                  building analysis workflows that translate raw terrain data into actionable risk intelligence.
                </p>
              </article>
            </section>
            <section class="section">
              <h2 class="section-label">Education</h2>
              <div class="edu-item">
                <p class="edu-degree">Master — Information Systems Technologies</p>
                <p class="edu-school">École nationale des Sciences géographiques</p>
                <p class="edu-focus">Focus: 3D mapping, GIS, systems architecture</p>
              </div>
              <div class="edu-item">
                <p class="edu-degree">Bachelor — Geography &amp; Environmental Planning</p>
                <p class="edu-school">Université Grenoble Alpes</p>
                <p class="edu-focus">Focus: Spatial analysis, environmental modelling</p>
              </div>
            </section>
            <section class="section">
              <h2 class="section-label">Certifications</h2>
              <div class="badge-grid">
                <a
                  v-for="cert in certifications"
                  :key="cert.title"
                  :href="cert.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="badge-card"
                >
                  <div class="badge-icon">
                    <Icon :icon="cert.icon" width="32" height="32" />
                  </div>
                  <p class="badge-title">{{ cert.title }}</p>
                  <p class="badge-issuer">{{ cert.issuer }}</p>
                </a>
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const certifications = [
  {
    title: 'Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    icon: 'logos:microsoft-azure',
    url: 'https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/'
  },
  {
    title: 'Azure Administrator Associate',
    issuer: 'Microsoft',
    icon: 'logos:microsoft-azure',
    url: 'https://learn.microsoft.com/en-us/certifications/azure-administrator/'
  },
  {
    title: 'ArcGIS Desktop Entry',
    issuer: 'Esri',
    icon: 'mdi:map-marker-circle',
    url: 'https://www.esri.com/training/catalog/certification/'
  },
  {
    title: 'Terraform Associate',
    issuer: 'HashiCorp',
    icon: 'logos:terraform-icon',
    url: 'https://developer.hashicorp.com/certifications/infrastructure-automation'
  },
  {
    title: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    icon: 'logos:google-cloud',
    url: 'https://cloud.google.com/certification/cloud-architect'
  }
]

useSeoMeta({
  title: 'About — Jacqueline Williams',
  description: 'GIS Architect & Cloud Engineer. Designing resilient geospatial systems at the intersection of cloud, mapping, and infrastructure.',
})
</script>

<style scoped>
/* ── Shell ──────────────────────────────────────────────────────── */
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

/* ── Container ──────────────────────────────────────────────────── */

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-4xl) 0;
}

.about-grid {
  display: flex;
  flex-direction: row;
  gap: var(--space-4xl);
}

.about-columns {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: var(--space-4xl);
}

.intro-section {
  flex: 1 1 320px;
  max-width: 340px;
  min-width: 260px;
  padding-top: var(--space-lg);
}

.about-main {
  flex: 2 1 0;
  min-width: 0;
}

.about-social {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.about-social a {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-base);
  transition: color var(--duration-200) var(--ease-out);
}

.about-social a:hover {
  color: var(--color-brand-primary-500);
}

@media (max-width: 1024px) {
  .about-grid, .about-columns {
    flex-direction: column;
    gap: var(--space-2xl);
  }
  .intro-section {
    max-width: 100%;
    min-width: 0;
  }
}

/* ── Sections ───────────────────────────────────────────────────── */
.section {
  padding: var(--space-2xl) 0;
}

.section-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-2xl);
}

.divider {
  height: 1px;
  background: var(--color-border-primary);
  opacity: 0.6;
}

/* ── Intro ──────────────────────────────────────────────────────── */
.intro-section {
  padding-top: var(--space-lg);
}

.name-heading {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-xs);
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-normal);
  margin-bottom: var(--space-xs);
}

.location {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-xl);
}

.pin-icon {
  flex-shrink: 0;
}

.narrative {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  max-width: 56ch;
}

/* ── Experience ─────────────────────────────────────────────────── */
.experience-item {
  margin-bottom: var(--space-2xl);
}

.experience-item:last-child {
  margin-bottom: 0;
}

.exp-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-xs);
}

.exp-role {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.exp-org {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-brand-primary-500);
}

.exp-meta {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-sm);
  letter-spacing: 0.02em;
}

.exp-description {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  max-width: 54ch;
}

/* ── Education ──────────────────────────────────────────────────── */
.edu-item {
  margin-bottom: var(--space-xl);
}

.edu-item:last-child {
  margin-bottom: 0;
}

.edu-degree {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2xs);
}

.edu-school {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xs);
}

.edu-focus {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  font-style: italic;
}

/* ── Certifications ─────────────────────────────────────────────── */
.badge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.badge-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-lg);
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  text-decoration: none;
  color: inherit;
  transition: all var(--duration-200) var(--ease-out);
}

.badge-card:hover {
  background: var(--color-surface-secondary);
  border-color: var(--color-border-interactive);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.badge-icon {
  color: var(--color-brand-primary-500);
  display: flex;
  align-items: center;
}

.badge-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}

.badge-issuer {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

/* ── Responsive ─────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .name-heading {
    font-size: var(--font-size-2xl);
  }

  .badge-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .container {
    padding: var(--space-2xl) 0;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }

  .badge-grid {
    grid-template-columns: 1fr;
  }

  .name-heading {
    font-size: var(--font-size-xl);
  }
}
</style>
