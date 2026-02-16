<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Hi, I'm <span class="highlight">Jack George</span>
          </h1>
          <p class="hero-subtitle">
            GIS Engineer • Azure Cloud Architect • Software Developer
          </p>
          <p class="hero-description">
            I design and build spatial data solutions that bridge the gap between geographic information systems,
            cloud infrastructure, and modern web applications. Transforming complex technical challenges into
            elegant, scalable solutions.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/projects" class="btn btn-primary btn-lg">
              View Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn btn-secondary btn-lg">
              Get In Touch
            </NuxtLink>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-value">5+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat">
              <div class="stat-value">3+</div>
              <div class="stat-label">Major Projects</div>
            </div>
            <div class="stat">
              <div class="stat-value">Azure</div>
              <div class="stat-label">Certified</div>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="floating-card card-1">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div class="floating-card card-2">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div class="floating-card card-3">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="expertise-section">
      <div class="container">
        <h2 class="section-title">Technical Expertise</h2>
        <p class="section-subtitle">
          Core competencies spanning geospatial technology, cloud architecture, and software engineering
        </p>
        
        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="expertise-icon">🗺️</div>
            <h3 class="expertise-title">GIS Engineering</h3>
            <p class="expertise-description">
              Spatial data analysis, cartography, geodatabase design, and geospatial web services.
              Proficient in ArcGIS, QGIS, and PostGIS.
            </p>
            <div class="expertise-tags">
              <span class="tag">ArcGIS</span>
              <span class="tag">PostGIS</span>
              <span class="tag">QGIS</span>
              <span class="tag">Spatial SQL</span>
            </div>
          </div>
          
          <div class="expertise-card">
            <div class="expertise-icon">☁️</div>
            <h3 class="expertise-title">Azure Cloud</h3>
            <p class="expertise-description">
              Cloud infrastructure design, serverless architecture, DevOps pipelines, and cost optimization.
              Azure certified with hands-on experience.
            </p>
            <div class="expertise-tags">
              <span class="tag">Azure</span>
              <span class="tag">Functions</span>
              <span class="tag">Static Web Apps</span>
              <span class="tag">CI/CD</span>
            </div>
          </div>
          
          <div class="expertise-card">
            <div class="expertise-icon">💻</div>
            <h3 class="expertise-title">Software Development</h3>
            <p class="expertise-description">
              Full-stack web development with modern frameworks. Clean architecture, testing, and
              performance optimization.
            </p>
            <div class="expertise-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Nuxt</span>
              <span class="tag">Python</span>
              <span class="tag">TypeScript</span>
            </div>
          </div>
          
          <div class="expertise-card">
            <div class="expertise-icon">🔗</div>
            <h3 class="expertise-title">Networking</h3>
            <p class="expertise-description">
              Network design, configuration, troubleshooting, and security. Understanding of protocols
              and infrastructure.
            </p>
            <div class="expertise-tags">
              <span class="tag">TCP/IP</span>
              <span class="tag">VPN</span>
              <span class="tag">DNS</span>
              <span class="tag">Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <NuxtLink to="/projects" class="view-all-link">
            View All Projects →
          </NuxtLink>
        </div>
        
        <div class="projects-grid">
          <article class="project-card">
            <div class="project-header">
              <h3 class="project-title">Spatial Data Pipeline</h3>
              <span class="project-status status-live">Live</span>
            </div>
            <p class="project-description">
              Automated ETL pipeline processing geospatial data with Azure Functions, 
              PostGIS, and real-time web mapping visualization.
            </p>
            <div class="project-tech">
              <span class="tech-tag">Azure Functions</span>
              <span class="tech-tag">PostGIS</span>
              <span class="tech-tag">Python</span>
            </div>
            <NuxtLink to="/projects/spatial-pipeline" class="project-link">
              Learn more →
            </NuxtLink>
          </article>
          
          <article class="project-card">
            <div class="project-header">
              <h3 class="project-title">Cloud GIS Platform</h3>
              <span class="project-status status-beta">Beta</span>
            </div>
            <p class="project-description">
              Scalable web GIS application built with Nuxt, Leaflet, and Azure Static Web Apps.
              Handles millions of spatial features efficiently.
            </p>
            <div class="project-tech">
              <span class="tech-tag">Nuxt.js</span>
              <span class="tech-tag">Leaflet</span>
              <span class="tech-tag">Azure</span>
            </div>
            <NuxtLink to="/projects/cloud-gis" class="project-link">
              Learn more →
            </NuxtLink>
          </article>
          
          <article class="project-card">
            <div class="project-header">
              <h3 class="project-title">Network Monitoring Tool</h3>
              <span class="project-status status-active">Active</span>
            </div>
            <p class="project-description">
              Real-time network monitoring dashboard with automated alerting and 
              performance analytics for enterprise infrastructure.
            </p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">WebSocket</span>
              <span class="tech-tag">Node.js</span>
            </div>
            <NuxtLink to="/projects/network-monitor" class="project-link">
              Learn more →
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Let's Build Something Together</h2>
          <p class="cta-description">
            Looking for a GIS engineer, cloud architect, or technical consultant? 
            I'm available for freelance projects and consulting opportunities.
          </p>
          <div class="cta-actions">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg">
              Start a Conversation
            </NuxtLink>
            <NuxtLink to="/about" class="btn btn-ghost btn-lg">
              View CV
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Jack George | GIS Engineer & Cloud Architect',
  description: 'Professional portfolio showcasing GIS engineering, Azure cloud architecture, and technical expertise.',
  ogTitle: 'Jack George | GIS Engineer & Cloud Architect',
  ogDescription: 'Professional portfolio showcasing GIS engineering, Azure cloud architecture, and technical expertise.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: var(--space-4xl) 0;
  background: linear-gradient(135deg, 
    var(--color-bg-primary) 0%, 
    color-mix(in srgb, var(--color-brand-primary) 5%, var(--color-bg-primary)) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.highlight {
  background: linear-gradient(120deg, var(--color-brand-primary), var(--brand-primary-400));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
  font-weight: var(--font-weight-medium);
}

.hero-description {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-xl);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.hero-stats {
  display: flex;
  gap: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border-primary);
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-brand-primary);
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

/* Floating Cards Animation */
.hero-visual {
  position: relative;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-2xl);
  animation: float 6s ease-in-out infinite;
}

.floating-card .icon {
  width: 60px;
  height: 60px;
  color: var(--color-brand-primary);
  stroke-width: 1.5;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 20%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 10%;
  left: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Expertise Section */
.expertise-section {
  padding: var(--space-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.section-subtitle {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
}

.expertise-card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.expertise-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-border-interactive);
}

.expertise-icon {
  font-size: 3rem;
  margin-bottom: var(--space-lg);
}

.expertise-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.expertise-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-lg);
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tag {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-surface-secondary);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  border-radius: var(--border-radius-base);
  font-weight: var(--font-weight-medium);
}

/* Projects Section */
.projects-section {
  padding: var(--space-4xl) 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3xl);
}

.view-all-link {
  color: var(--color-brand-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: transform var(--transition-fast);
}

.view-all-link:hover {
  transform: translateX(4px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);
}

.project-card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-brand-primary);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
}

.project-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.project-status {
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
}

.status-live {
  background: color-mix(in srgb, var(--color-success) 20%, transparent);
  color: var(--color-success-dark);
}

.status-beta {
  background: color-mix(in srgb, var(--color-warning) 20%, transparent);
  color: var(--color-warning-dark);
}

.status-active {
  background: color-mix(in srgb, var(--color-info) 20%, transparent);
  color: var(--color-info-dark);
}

.project-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-lg);
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.tech-tag {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-surface-tertiary);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  border-radius: var(--border-radius-base);
  font-weight: var(--font-weight-medium);
}

.project-link {
  color: var(--color-brand-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  align-self: flex-start;
  transition: transform var(--transition-fast);
}

.project-link:hover {
  transform: translateX(4px);
}

/* CTA Section */
.cta-section {
  padding: var(--space-4xl) 0;
  background: linear-gradient(135deg, 
    color-mix(in srgb, var(--color-brand-primary) 10%, var(--color-bg-primary)) 0%,
    var(--color-bg-primary) 100%
  );
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.cta-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-2xl);
}

.cta-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    order: 1;
  }
  
  .hero-visual {
    order: 2;
    height: 300px;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-stats {
    gap: var(--space-lg);
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .hero-visual {
    display: none;
  }
}
</style>
