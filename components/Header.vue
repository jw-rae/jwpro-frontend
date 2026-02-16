<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-brand">
        <NuxtLink to="/" class="brand-link">
          <span class="brand-name">Jack George</span>
          <span class="brand-subtitle">GIS • Cloud • Engineering</span>
        </NuxtLink>
      </div>
      
      <button 
        class="mobile-menu-toggle"
        :class="{ active: mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      
      <div class="nav-links" :class="{ open: mobileMenuOpen }">
        <NuxtLink 
          to="/" 
          class="nav-link"
          @click="closeMobileMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="nav-link"
          @click="closeMobileMenu"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/projects" 
          class="nav-link"
          @click="closeMobileMenu"
        >
          Projects
        </NuxtLink>
        <NuxtLink 
          to="/news" 
          class="nav-link"
          @click="closeMobileMenu"
        >
          News
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="nav-link"
          @click="closeMobileMenu"
        >
          Contact
        </NuxtLink>
        
        <button 
          class="theme-toggle" 
          @click="toggleTheme"
          aria-label="Toggle dark mode"
        >
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const isDark = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const newScheme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-color-scheme', newScheme)
  localStorage.setItem('colorScheme', newScheme)
}

onMounted(() => {
  const savedScheme = localStorage.getItem('colorScheme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  isDark.value = savedScheme === 'dark'
})
</script>

<style scoped>
.header {
  background: var(--color-surface-primary);
  border-bottom: 1px solid var(--color-border-primary);
  position: sticky;
  top: 0;
  z-index: var(--z-index-50);
  backdrop-filter: blur(8px);
  background: color-mix(in srgb, var(--color-surface-primary) 95%, transparent);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-md) var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform var(--transition-fast);
}

.brand-link:hover {
  transform: translateY(-1px);
}

.brand-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: 1.2;
}

.brand-subtitle {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  letter-spacing: var(--letter-spacing-wide);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
  z-index: var(--z-index-50);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-fast);
  border-radius: 2px;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.nav-links {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.nav-link {
  padding: var(--space-xs) var(--space-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: var(--color-state-hover);
}

.nav-link.router-link-active {
  color: var(--color-brand-primary);
  font-weight: var(--font-weight-semibold);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: var(--space-md);
  right: var(--space-md);
  height: 2px;
  background: var(--color-brand-primary);
  border-radius: 2px;
}

.theme-toggle {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-size: var(--font-size-lg);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.theme-toggle:hover {
  background: var(--color-surface-tertiary);
  transform: rotate(15deg);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    max-width: 300px;
    background: var(--color-surface-primary);
    flex-direction: column;
    align-items: stretch;
    padding: var(--space-3xl) var(--space-lg) var(--space-lg);
    transform: translateX(100%);
    transition: transform var(--transition-base);
    box-shadow: var(--shadow-2xl);
    border-left: 1px solid var(--color-border-primary);
  }
  
  .nav-links.open {
    transform: translateX(0);
  }
  
  .nav-link {
    padding: var(--space-md);
    font-size: var(--font-size-base);
  }
  
  .theme-toggle {
    margin-top: var(--space-lg);
    align-self: flex-start;
  }
}
</style>
