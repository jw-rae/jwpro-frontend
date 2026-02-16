<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="news-hero">
      <div class="container">
        <h1 class="page-title">Industry News & Insights</h1>
        <p class="page-subtitle">
          Curated content from GIS, cloud computing, and software development communities
        </p>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
      <div class="container">
        <div class="category-filters">
          <button 
            v-for="category in categories" 
            :key="category.id"
            :class="['category-btn', { active: activeCategory === category.id }]"
            @click="setCategory(category.id)"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span class="category-label">{{ category.label }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- News Feed Section -->
    <section class="news-feed-section">
      <div class="container">
        <div class="feed-layout">
          <!-- Main Feed -->
          <div class="main-feed">
            <div v-if="loading" class="loading-state">
              <div class="spinner"></div>
              <p>Loading latest articles...</p>
            </div>
            
            <div v-else-if="filteredArticles.length === 0" class="empty-state">
              <p>No articles available in this category.</p>
            </div>
            
            <div v-else class="articles-grid">
              <article 
                v-for="article in filteredArticles" 
                :key="article.id"
                class="article-card"
              >
                <div class="article-meta">
                  <span class="article-source">{{ article.source }}</span>
                  <span class="article-date">{{ formatDate(article.date) }}</span>
                </div>
                
                <h3 class="article-title">
                  <a :href="article.url" target="_blank" rel="noopener noreferrer">
                    {{ article.title }}
                  </a>
                </h3>
                
                <p class="article-excerpt">{{ article.excerpt }}</p>
                
                <div class="article-footer">
                  <div class="article-tags">
                    <span 
                      v-for="tag in article.tags" 
                      :key="tag"
                      class="article-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  
                  <a 
                    :href="article.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="article-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            </div>
          </div>
          
          <!-- Sidebar -->
          <aside class="feed-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-title">About This Feed</h3>
              <p class="sidebar-description">
                This curated news feed aggregates content from leading sources in GIS, cloud computing,
                and software development. Articles are selected for their technical depth and industry relevance.
              </p>
            </div>
            
            <div class="sidebar-card">
              <h3 class="sidebar-title">RSS Sources</h3>
              <ul class="sources-list">
                <li>
                  <a href="https://www.esri.com/arcgis-blog/" target="_blank" rel="noopener noreferrer">
                    Esri ArcGIS Blog
                  </a>
                </li>
                <li>
                  <a href="https://azure.microsoft.com/en-us/blog/" target="_blank" rel="noopener noreferrer">
                    Azure Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.gislounge.com/" target="_blank" rel="noopener noreferrer">
                    GIS Lounge
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/" target="_blank" rel="noopener noreferrer">
                    DEV Community
                  </a>
                </li>
                <li>
                  <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">
                    Hacker News
                  </a>
                </li>
              </ul>
            </div>
            
            <div class="sidebar-card">
              <h3 class="sidebar-title">Newsletter</h3>
              <p class="sidebar-description">
                Get weekly updates on GIS and cloud technology delivered to your inbox.
              </p>
              <div class="newsletter-form">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  class="newsletter-input"
                >
                <button class="btn btn-primary btn-sm">
                  Subscribe
                </button>
              </div>
              <p class="newsletter-note">Coming soon - newsletter integration</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'News & Insights | Jack George - GIS & Cloud Updates',
  description: 'Curated industry news and insights on GIS, cloud computing, and software development.',
  ogTitle: 'News & Insights | Jack George - GIS & Cloud Updates',
})

const loading = ref(false)
const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All', icon: '📰' },
  { id: 'gis', label: 'GIS', icon: '🗺️' },
  { id: 'cloud', label: 'Cloud', icon: '☁️' },
  { id: 'dev', label: 'Development', icon: '💻' },
  { id: 'networking', label: 'Networking', icon: '🔗' }
]

// Sample articles - In production, this would be fetched from RSS feeds
const articles = [
  {
    id: 1,
    title: 'The Future of Cloud-Native GIS Architecture',
    source: 'GIS Lounge',
    date: new Date('2026-02-10'),
    category: 'gis',
    url: 'https://www.gislounge.com/',
    excerpt: 'Exploring how cloud-native architectures are transforming the way we build and deploy GIS applications, with a focus on serverless patterns and microservices.',
    tags: ['GIS', 'Cloud', 'Architecture']
  },
  {
    id: 2,
    title: 'Azure Functions Best Practices for Geospatial Processing',
    source: 'Azure Blog',
    date: new Date('2026-02-08'),
    category: 'cloud',
    url: 'https://azure.microsoft.com/en-us/blog/',
    excerpt: 'Learn how to optimize Azure Functions for handling large-scale geospatial data processing tasks with practical examples and performance benchmarks.',
    tags: ['Azure', 'Serverless', 'Performance']
  },
  {
    id: 3,
    title: 'PostGIS 3.5: New Features for Spatial Developers',
    source: 'PostGIS Blog',
    date: new Date('2026-02-05'),
    category: 'gis',
    url: 'https://postgis.net/',
    excerpt: 'A deep dive into the latest PostGIS release featuring improved performance, new spatial functions, and enhanced support for 3D geometries.',
    tags: ['PostGIS', 'Database', 'Spatial']
  },
  {
    id: 4,
    title: 'Nuxt 4: What\'s New in Static Site Generation',
    source: 'Nuxt Blog',
    date: new Date('2026-02-01'),
    category: 'dev',
    url: 'https://nuxt.com/',
    excerpt: 'Exploring the latest improvements in Nuxt 4 for static site generation, including faster build times and enhanced developer experience.',
    tags: ['Nuxt', 'Vue.js', 'JAMstack']
  },
  {
    id: 5,
    title: 'Building Resilient Network Infrastructure in the Cloud',
    source: 'Cloud Network',
    date: new Date('2026-01-28'),
    category: 'networking',
    url: '#',
    excerpt: 'Best practices for designing fault-tolerant network architectures in cloud environments with a focus on redundancy and failover strategies.',
    tags: ['Networking', 'Cloud', 'Infrastructure']
  },
  {
    id: 6,
    title: 'Web Mapping Performance Optimization Techniques',
    source: 'Esri Blog',
    date: new Date('2026-01-25'),
    category: 'gis',
    url: 'https://www.esri.com/arcgis-blog/',
    excerpt: 'Practical techniques for improving web mapping application performance, including vector tiles, clustering, and efficient data loading strategies.',
    tags: ['Web Mapping', 'Performance', 'UX']
  },
  {
    id: 7,
    title: 'Serverless Cost Optimization Strategies',
    source: 'Azure Blog',
    date: new Date('2026-01-20'),
    category: 'cloud',
    url: 'https://azure.microsoft.com/en-us/blog/',
    excerpt: 'Learn how to minimize costs in serverless architectures through intelligent function design, cold start optimization, and resource management.',
    tags: ['Serverless', 'Cost', 'Azure']
  },
  {
    id: 8,
    title: 'Modern CI/CD Pipelines for Geospatial Applications',
    source: 'DEV Community',
    date: new Date('2026-01-15'),
    category: 'dev',
    url: 'https://dev.to/',
    excerpt: 'Setting up automated testing and deployment pipelines for GIS applications using GitHub Actions and Azure DevOps.',
    tags: ['CI/CD', 'DevOps', 'Automation']
  }
]

const setCategory = (categoryId) => {
  activeCategory.value = categoryId
}

const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') {
    return articles
  }
  return articles.filter(a => a.category === activeCategory.value)
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
</script>

<style scoped>
.news-hero {
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

/* Categories Section */
.categories-section {
  padding: var(--space-xl) 0;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border-primary);
}

.category-filters {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-full);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.category-btn:hover {
  border-color: var(--color-border-interactive);
  color: var(--color-text-primary);
  transform: translateY(-1px);
}

.category-btn.active {
  background: var(--color-brand-primary);
  border-color: var(--color-brand-primary);
  color: var(--color-text-inverse);
}

.category-icon {
  font-size: var(--font-size-lg);
}

/* News Feed Section */
.news-feed-section {
  padding: var(--space-4xl) 0;
}

.feed-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--space-3xl);
}

.main-feed {
  min-height: 400px;
}

.loading-state,
.empty-state {
  text-align: center;
  padding: var(--space-4xl);
  color: var(--color-text-tertiary);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-surface-secondary);
  border-top-color: var(--color-brand-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto var(--space-md);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.articles-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.article-card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.article-card:hover {
  border-color: var(--color-brand-primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  font-size: var(--font-size-sm);
}

.article-source {
  color: var(--color-brand-primary);
  font-weight: var(--font-weight-medium);
}

.article-date {
  color: var(--color-text-tertiary);
}

.article-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  line-height: var(--line-height-tight);
}

.article-title a {
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.article-title a:hover {
  color: var(--color-brand-primary);
}

.article-excerpt {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-lg);
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border-primary);
}

.article-tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.article-tag {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-surface-secondary);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xs);
  border-radius: var(--border-radius-base);
  font-weight: var(--font-weight-medium);
}

.article-link {
  color: var(--color-brand-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  white-space: nowrap;
  transition: transform var(--transition-fast);
}

.article-link:hover {
  transform: translateX(4px);
}

/* Sidebar */
.feed-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.sidebar-card {
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
}

.sidebar-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.sidebar-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-sm);
}

.sources-list {
  list-style: none;
  padding: 0;
}

.sources-list li {
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border-primary);
}

.sources-list li:last-child {
  border-bottom: none;
}

.sources-list a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.sources-list a:hover {
  color: var(--color-brand-primary);
}

.newsletter-form {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.newsletter-input {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  color: var(--color-text-primary);
  font-size: var(--font-size-sm);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--color-border-focus);
}

.newsletter-note {
  margin-top: var(--space-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .feed-layout {
    grid-template-columns: 1fr;
  }
  
  .feed-sidebar {
    grid-row: 2;
  }
}

@media (max-width: 768px) {
  .category-filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: var(--space-sm);
  }
  
  .newsletter-form {
    flex-direction: column;
  }
}
</style>
