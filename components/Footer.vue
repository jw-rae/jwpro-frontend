<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Jack George</h3>
          <p class="footer-description">
            GIS Engineer & Azure Cloud Architect specializing in spatial data solutions and cloud infrastructure.
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-heading">Quick Links</h4>
          <nav class="footer-links">
            <NuxtLink to="/about" class="footer-link">About</NuxtLink>
            <NuxtLink to="/projects" class="footer-link">Projects</NuxtLink>
            <NuxtLink to="/news" class="footer-link">News</NuxtLink>
            <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
          </nav>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-heading">Connect</h4>
          <div class="social-links">
            <a href="https://github.com/jackgeo" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/jackgeo" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} Jack George. Built with Nuxt.js and Azure Static Web Apps.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-surface-secondary);
  border-top: 1px solid var(--color-border-primary);
  padding: var(--space-3xl) 0 var(--space-xl);
  margin-top: var(--space-4xl);
}

.footer-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin: 0;
}

.footer-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.footer-heading {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  margin: 0;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-brand-primary);
}

.social-links {
  display: flex;
  gap: var(--space-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--color-brand-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-brand-primary);
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

.footer-bottom {
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border-primary);
  text-align: center;
}

.footer-copyright {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-sm);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
</style>
