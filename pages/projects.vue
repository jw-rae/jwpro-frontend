<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="container">
        <h1 class="page-title">Projects</h1>
        <p class="page-subtitle">
          A showcase of technical projects spanning GIS engineering, cloud architecture, and full-stack development
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <button 
            v-for="category in categories" 
            :key="category.id"
            :class="['filter-btn', { active: activeFilter === category.id }]"
            @click="setFilter(category.id)"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <article 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
          >
            <div class="project-image">
              <div class="project-category-badge">{{ project.category }}</div>
              <div class="project-placeholder" :style="{ background: project.color }">
                {{ project.icon }}
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span :class="['project-status', `status-${project.status}`]">
                  {{ project.statusLabel }}
                </span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-highlights">
                <h4 class="highlights-title">Key Features:</h4>
                <ul class="highlights-list">
                  <li v-for="highlight in project.highlights" :key="highlight">
                    {{ highlight }}
                  </li>
                </ul>
              </div>
              
              <div class="project-tech">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              
              <div class="project-actions">
                <a 
                  v-if="project.liveUrl" 
                  :href="project.liveUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm"
                >
                  View Live →
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-secondary btn-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
        
        <div v-if="filteredProjects.length === 0" class="no-results">
          <p>No projects found in this category.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Have a Project in Mind?</h2>
          <p class="cta-description">
            Let's discuss how I can help bring your GIS or cloud project to life.
          </p>
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">
            Start a Conversation
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Projects | Jack George - GIS & Cloud Portfolio',
  description: 'Portfolio of GIS engineering, cloud architecture, and software development projects.',
  ogTitle: 'Projects | Jack George - GIS & Cloud Portfolio',
})

const activeFilter = ref('all')

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'gis', label: 'GIS' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'web', label: 'Web Dev' },
  { id: 'networking', label: 'Networking' }
]

const projects = [
  {
    id: 1,
    title: 'Spatial Data Pipeline',
    category: 'GIS',
    categoryId: 'gis',
    status: 'live',
    statusLabel: 'Live',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🗺️',
    description: 'Automated ETL pipeline for processing large-scale geospatial datasets with real-time visualization capabilities.',
    highlights: [
      'Processes 10M+ spatial features daily',
      'Azure Functions serverless architecture',
      'PostGIS optimization for complex queries',
      'Real-time web mapping dashboard'
    ],
    technologies: ['Azure Functions', 'PostGIS', 'Python', 'Leaflet', 'Docker'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 2,
    title: 'Cloud GIS Platform',
    category: 'Cloud',
    categoryId: 'cloud',
    status: 'beta',
    statusLabel: 'Beta',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '☁️',
    description: 'Scalable cloud-native GIS platform leveraging Azure Static Web Apps and serverless APIs.',
    highlights: [
      'Fully static frontend deployment',
      'Serverless spatial API endpoints',
      'CI/CD with GitHub Actions',
      'Cost-optimized architecture (<$10/month)'
    ],
    technologies: ['Nuxt.js', 'Azure Static Web Apps', 'REST API', 'TurfJS'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 3,
    title: 'Interactive Web Maps',
    category: 'Web Dev',
    categoryId: 'web',
    status: 'active',
    statusLabel: 'Active',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '🌐',
    description: 'Collection of responsive web mapping applications with custom controls and spatial analysis tools.',
    highlights: [
      'Mobile-first responsive design',
      'Custom Leaflet plugins',
      'Vector tile rendering',
      'Offline-capable PWA'
    ],
    technologies: ['Vue.js', 'Leaflet', 'Mapbox GL', 'Service Workers'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 4,
    title: 'Geodatabase Migration Tool',
    category: 'GIS',
    categoryId: 'gis',
    status: 'active',
    statusLabel: 'Active',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '🔄',
    description: 'Automated migration tool for transferring enterprise geodatabases to PostGIS with schema validation.',
    highlights: [
      'Supports ArcSDE to PostGIS migration',
      'Preserves spatial indexes and relationships',
      'Validation and error reporting',
      'Incremental migration support'
    ],
    technologies: ['Python', 'ArcPy', 'PostGIS', 'SQL'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 5,
    title: 'Network Monitoring Dashboard',
    category: 'Networking',
    categoryId: 'networking',
    status: 'active',
    statusLabel: 'Active',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    icon: '🔗',
    description: 'Real-time network monitoring solution with automated alerting and performance analytics.',
    highlights: [
      'Real-time WebSocket updates',
      'Device status monitoring',
      'Bandwidth analytics',
      'Automated alert system'
    ],
    technologies: ['Vue.js', 'Node.js', 'WebSocket', 'SNMP'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 6,
    title: 'Azure Infrastructure Automation',
    category: 'Cloud',
    categoryId: 'cloud',
    status: 'live',
    statusLabel: 'Live',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: '⚙️',
    description: 'Infrastructure as Code templates for rapid Azure resource deployment with best practices.',
    highlights: [
      'Bicep and ARM templates',
      'Cost monitoring and optimization',
      'Security baseline configurations',
      'Multi-region deployment support'
    ],
    technologies: ['Azure', 'Bicep', 'PowerShell', 'GitHub Actions'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 7,
    title: 'GIS Certification Study Platform',
    category: 'Web Dev',
    categoryId: 'web',
    status: 'planning',
    statusLabel: 'Planning',
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: '📚',
    description: 'Interactive study platform for GIS certification preparation with glossary and practice questions.',
    highlights: [
      'Comprehensive GIS term glossary',
      'Practice exam questions',
      'Progress tracking',
      'Community-driven content'
    ],
    technologies: ['Nuxt.js', 'Firebase', 'Markdown', 'Algolia'],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 8,
    title: 'Spatial Analysis Toolkit',
    category: 'GIS',
    categoryId: 'gis',
    status: 'active',
    statusLabel: 'Active',
    color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: '🧮',
    description: 'Python library for common GIS analysis workflows with simplified API for rapid prototyping.',
    highlights: [
      'Buffer, overlay, and proximity analysis',
      'Simplified spatial operations API',
      'Integration with GeoPandas',
      'CLI tool for batch processing'
    ],
    technologies: ['Python', 'GeoPandas', 'Shapely', 'Click'],
    liveUrl: null,
    githubUrl: null
  }
]

const setFilter = (categoryId) => {
  activeFilter.value = categoryId
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(p => p.categoryId === activeFilter.value)
})
</script>

<style scoped>
.projects-hero {
  padding: var(--space-3xl) 0 var(--space-2xl);
  background: linear-gradient(135deg, 
    var(--color-bg-primary) 0%, 
    color-mix(in srgb, var(--color-brand-primary) 5%, var(--color-bg-primary)) 100%
  );
  text-align: center;
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* Filter Section */
.filter-section {
  padding: var(--space-xl) 0;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border-primary);
}

.filter-controls {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-full);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-border-interactive);
  color: var(--color-text-primary);
}

.filter-btn.active {
  background: var(--color-brand-primary);
  border-color: var(--color-brand-primary);
  color: var(--color-text-inverse);
}

/* Projects Section */
.projects-section {
  padding: var(--space-4xl) 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: var(--space-2xl);
}

.project-card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-brand-primary);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-category-badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  z-index: 2;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.project-content {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  flex: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-sm);
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
  white-space: nowrap;
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

.status-planning {
  background: color-mix(in srgb, var(--neutral-500) 20%, transparent);
  color: var(--neutral-700);
}

.project-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.project-highlights {
  background: var(--color-surface-secondary);
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
}

.highlights-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights-list li {
  padding: var(--space-xs) 0;
  padding-left: var(--space-md);
  position: relative;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.highlights-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-brand-primary);
  font-weight: bold;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tech-tag {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-surface-tertiary);
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  border-radius: var(--border-radius-base);
  font-weight: var(--font-weight-medium);
}

.project-actions {
  display: flex;
  gap: var(--space-sm);
  margin-top: auto;
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border-primary);
}

.no-results {
  text-align: center;
  padding: var(--space-4xl);
  color: var(--color-text-tertiary);
}

/* CTA Section */
.cta-section {
  padding: var(--space-4xl) 0;
  background: linear-gradient(135deg, 
    color-mix(in srgb, var(--color-brand-primary) 10%, var(--color-bg-primary)) 0%,
    var(--color-bg-primary) 100%
  );
  text-align: center;
}

.cta-content {
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
  margin-bottom: var(--space-xl);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-controls {
    justify-content: flex-start;
  }
}
</style>
