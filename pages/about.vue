<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">About Me</h1>
          <p class="page-subtitle">
            GIS Engineer & Azure Cloud Architect with a passion for building scalable spatial data solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="bio-section">
      <div class="container">
        <div class="bio-grid">
          <div class="bio-content">
            <h2 class="section-heading">Background & Philosophy</h2>
            <p class="bio-text">
              I specialize in Geographic Information Systems (GIS), cloud architecture, and full-stack development.
              My work sits at the intersection of spatial technology, cloud infrastructure, and software engineering,
              where I design systems that handle complex geospatial data at scale.
            </p>
            <p class="bio-text">
              With Azure certification and extensive hands-on experience, I architect cloud-native solutions that
              emphasize performance, reliability, and cost efficiency. I believe in clean code, thoughtful architecture,
              and documentation that serves future maintainers.
            </p>
            <p class="bio-text">
              Beyond technical implementation, I focus on understanding the problem domain deeply—whether that's 
              optimizing spatial queries, designing CI/CD pipelines, or building intuitive web mapping interfaces.
              My goal is always to deliver solutions that are technically sound and practically useful.
            </p>
          </div>
          
          <div class="bio-sidebar">
            <div class="info-card">
              <h3 class="info-title">Quick Facts</h3>
              <ul class="info-list">
                <li><strong>Location:</strong> Remote-friendly</li>
                <li><strong>Experience:</strong> 5+ years</li>
                <li><strong>Education:</strong> GIS & Computer Science</li>
                <li><strong>Certifications:</strong> Azure Certified</li>
                <li><strong>Availability:</strong> Open to freelance</li>
              </ul>
            </div>
            
            <div class="info-card">
              <h3 class="info-title">Current Focus</h3>
              <ul class="focus-list">
                <li>Cloud-native GIS architecture</li>
                <li>Serverless spatial data processing</li>
                <li>Static site generation & JAMstack</li>
                <li>Network infrastructure & security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">Senior GIS Engineer</h3>
                <span class="timeline-period">2021 – Present</span>
              </div>
              <p class="timeline-company">Geospatial Solutions Inc.</p>
              <ul class="timeline-details">
                <li>Architected cloud-native GIS platform processing 10M+ spatial features using Azure Functions and PostGIS</li>
                <li>Reduced data processing time by 70% through optimized ETL pipelines and spatial indexing strategies</li>
                <li>Led migration from on-premise ArcGIS Server to Azure-based microservices architecture</li>
                <li>Implemented CI/CD workflows using GitHub Actions, reducing deployment time from hours to minutes</li>
              </ul>
              <div class="timeline-tech">
                <span class="tech-badge">Azure</span>
                <span class="tech-badge">PostGIS</span>
                <span class="tech-badge">Python</span>
                <span class="tech-badge">ArcGIS</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">GIS Developer</h3>
                <span class="timeline-period">2019 – 2021</span>
              </div>
              <p class="timeline-company">MapTech Labs</p>
              <ul class="timeline-details">
                <li>Built responsive web mapping applications using Leaflet, Vue.js, and REST APIs</li>
                <li>Developed custom geoprocessing tools and Python scripts for spatial analysis workflows</li>
                <li>Designed and maintained enterprise geodatabases supporting multi-user editing environments</li>
                <li>Created technical documentation and training materials for GIS staff and stakeholders</li>
              </ul>
              <div class="timeline-tech">
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">Leaflet</span>
                <span class="tech-badge">SQL Server</span>
                <span class="tech-badge">QGIS</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">Junior GIS Analyst</h3>
                <span class="timeline-period">2018 – 2019</span>
              </div>
              <p class="timeline-company">Regional Planning Agency</p>
              <ul class="timeline-details">
                <li>Performed spatial analysis and cartographic production for regional planning initiatives</li>
                <li>Managed data collection, QA/QC, and geodatabase maintenance</li>
                <li>Created automated map series and reports using ArcGIS Model Builder</li>
              </ul>
              <div class="timeline-tech">
                <span class="tech-badge">ArcGIS Pro</span>
                <span class="tech-badge">Model Builder</span>
                <span class="tech-badge">Cartography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">GIS & Geospatial</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">PostGIS / Spatial SQL</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 95%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">ArcGIS Platform</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">QGIS</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Geoprocessing / Python</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Cloud & DevOps</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">Azure Services</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">CI/CD Pipelines</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Docker / Containers</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 80%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Infrastructure as Code</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Web Development</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">Vue.js / Nuxt</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 92%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">JavaScript / TypeScript</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Python / FastAPI</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">REST APIs</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Networking</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">TCP/IP & Protocols</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 80%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">VPN & Security</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 75%"></div>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">DNS & Load Balancing</span>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 78%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="certifications-section">
      <div class="container">
        <h2 class="section-title">Certifications & Education</h2>
        
        <div class="cert-grid">
          <div class="cert-card">
            <div class="cert-icon">🎓</div>
            <h3 class="cert-title">Azure Fundamentals</h3>
            <p class="cert-issuer">Microsoft</p>
            <p class="cert-date">2023</p>
          </div>
          
          <div class="cert-card">
            <div class="cert-icon">📜</div>
            <h3 class="cert-title">GISP Candidate</h3>
            <p class="cert-issuer">GIS Certification Institute</p>
            <p class="cert-date">In Progress</p>
          </div>
          
          <div class="cert-card">
            <div class="cert-icon">🏆</div>
            <h3 class="cert-title">B.S. Geography (GIS)</h3>
            <p class="cert-issuer">State University</p>
            <p class="cert-date">2018</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Interested in Working Together?</h2>
          <p class="cta-description">
            I'm available for freelance GIS engineering, cloud architecture consulting, and full-stack development projects.
          </p>
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About Jack George | CV & Professional Experience',
  description: 'Professional background, experience, and technical skills of Jack George - GIS Engineer and Azure Cloud Architect.',
  ogTitle: 'About Jack George | CV & Professional Experience',
})
</script>

<style scoped>
.about-hero {
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

/* Bio Section */
.bio-section {
  padding: var(--space-4xl) 0;
}

.bio-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-3xl);
}

.section-heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.bio-text {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-lg);
  font-size: var(--font-size-md);
}

.bio-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.info-card {
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
}

.info-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.info-list {
  list-style: none;
  padding: 0;
}

.info-list li {
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border-primary);
  color: var(--color-text-secondary);
}

.info-list li:last-child {
  border-bottom: none;
}

.focus-list {
  list-style: none;
  padding: 0;
}

.focus-list li {
  padding: var(--space-sm) 0;
  padding-left: var(--space-lg);
  position: relative;
  color: var(--color-text-secondary);
}

.focus-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-brand-primary);
  font-weight: bold;
}

/* Experience Section */
.experience-section {
  padding: var(--space-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-3xl);
  color: var(--color-text-primary);
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-left: var(--space-xl);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border-primary);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-3xl);
}

.timeline-marker {
  position: absolute;
  left: -30px;
  top: 0;
  width: 16px;
  height: 16px;
  background: var(--color-brand-primary);
  border: 3px solid var(--color-surface-primary);
  border-radius: 50%;
  z-index: 1;
}

.timeline-content {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
  margin-left: var(--space-lg);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-xs);
}

.timeline-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.timeline-period {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}

.timeline-company {
  color: var(--color-brand-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-md);
}

.timeline-details {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space-lg);
}

.timeline-details li {
  padding: var(--space-xs) 0;
  padding-left: var(--space-lg);
  position: relative;
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.timeline-details li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-brand-primary);
  font-weight: bold;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tech-badge {
  padding: var(--space-xs) var(--space-sm);
  background: color-mix(in srgb, var(--color-brand-primary) 15%, transparent);
  color: var(--color-brand-primary);
  font-size: var(--font-size-xs);
  border-radius: var(--border-radius-base);
  font-weight: var(--font-weight-medium);
}

/* Skills Section */
.skills-section {
  padding: var(--space-4xl) 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
}

.skill-category {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
}

.skill-category-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.skill-name {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

.skill-bar {
  height: 8px;
  background: var(--color-surface-secondary);
  border-radius: var(--border-radius-full);
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(90deg, var(--color-brand-primary), var(--brand-primary-400));
  border-radius: var(--border-radius-full);
  transition: width 1s ease-out;
}

/* Certifications Section */
.certifications-section {
  padding: var(--space-4xl) 0;
  background: var(--color-bg-secondary);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  max-width: 900px;
  margin: 0 auto;
}

.cert-card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
  text-align: center;
  transition: all var(--transition-base);
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.cert-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.cert-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-sm);
  color: var(--color-text-primary);
}

.cert-issuer {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-xs);
}

.cert-date {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

/* CTA Section */
.cta-section {
  padding: var(--space-4xl) 0;
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
  .bio-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline {
    padding-left: var(--space-md);
  }
  
  .timeline-marker {
    left: -22px;
  }
  
  .timeline-header {
    flex-direction: column;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
