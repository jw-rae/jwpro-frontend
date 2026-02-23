<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <NuxtLink to="/" class="brand-primary">JWPRO.NET</NuxtLink>
      </div>
      <nav class="header-nav">
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/rss" class="nav-link">RSS</NuxtLink>
        <div class="right-group">
          <div class="controls-group">
            <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
              <Icon v-if="!isDarkMode" icon="lucide:moon" width="20" height="20" />
              <Icon v-else icon="lucide:sun" width="20" height="20" />
            </button>
            <div class="theme-selector" ref="themeSelectorRef">
              <button class="theme-selector-toggle" @click="toggleThemeMenu" aria-label="Select theme">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </button>
              <div v-if="showThemeMenu" class="theme-menu">
                <button
                  v-for="theme in themes"
                  :key="theme.value"
                  @click="selectTheme(theme.value)"
                  :class="{ active: currentTheme === theme.value }"
                  class="theme-menu-item"
                >
                  <span class="theme-color" :style="{ background: theme.color }"></span>
                  <span class="theme-name">{{ theme.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['lang-change'])

const isDarkMode = ref(false)
const currentTheme = ref('blue')
const showThemeMenu = ref(false)
const lang = ref('en')
const themeSelectorRef = ref(null)

const themes = ref([
  { value: 'warm', label: 'Warm', color: '#777674' },
  { value: 'cool', label: 'Cool', color: '#71747e' },
  { value: 'pink', label: 'Pink', color: '#937886' },
  { value: 'green', label: 'Green', color: '#7c7e7c' },
  { value: 'blue', label: 'Blue', color: '#757b87' }
])

const toggleTheme = () => {
  const currentScheme = document.documentElement.getAttribute('data-color-scheme')
  const isDark = currentScheme === 'dark'
  if (isDark) {
    document.documentElement.setAttribute('data-color-scheme', 'light')
    localStorage.setItem('theme-mode', 'light')
    isDarkMode.value = false
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'dark')
    localStorage.setItem('theme-mode', 'dark')
    isDarkMode.value = true
  }
}

const toggleThemeMenu = () => {
  showThemeMenu.value = !showThemeMenu.value
}

const selectTheme = (theme) => {
  currentTheme.value = theme
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme')
    localStorage.removeItem('theme')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
  showThemeMenu.value = false
}

const setLang = (language) => {
  lang.value = language
  localStorage.setItem('lang', language)
  emit('lang-change', language)
}

onMounted(() => {
  // Restore language preference
  const savedLang = localStorage.getItem('lang')
  if (savedLang === 'en' || savedLang === 'fr') lang.value = savedLang

  // Initialize dark mode state from DOM
  const currentScheme = document.documentElement.getAttribute('data-color-scheme')
  isDarkMode.value = currentScheme === 'dark'

  // Initialize theme
  const savedTheme = localStorage.getItem('theme') || 'blue'
  currentTheme.value = savedTheme

  // Close theme menu when clicking outside
  const handleClickOutside = (e) => {
    if (showThemeMenu.value && themeSelectorRef.value && !themeSelectorRef.value.contains(e.target)) {
      showThemeMenu.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped>
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
  text-decoration: none;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.right-group {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.controls-group {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--duration-200) var(--ease-out);
}

.nav-link:hover,
.nav-link.router-link-active {
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

/* Theme Selector */
.theme-selector {
  position: relative;
}

.theme-selector-toggle {
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

.theme-selector-toggle:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.theme-menu {
  position: absolute;
  top: calc(100% + var(--space-xs));
  right: 0;
  min-width: 160px;
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-xs);
  z-index: var(--z-index-50);
  animation: slideDown var(--duration-200) var(--ease-out);
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.theme-menu-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-align: left;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: all var(--duration-200) var(--ease-out);
}

.theme-menu-item:hover {
  background: var(--color-surface-secondary);
}

.theme-menu-item.active {
  background: var(--color-surface-secondary);
  color: var(--color-brand-primary-500);
}

.theme-color {
  width: 16px;
  height: 16px;
  border-radius: var(--border-radius-full);
  border: 2px solid var(--color-border-primary);
  flex-shrink: 0;
}

.theme-name {
  flex: 1;
}

/* Language Switch */
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

/* Responsive */
@media (max-width: 768px) {
  .header {
    height: var(--space-2xl);
  }

  .header-container {
    padding: 0 var(--space-sm);
  }

  .theme-selector-toggle {
    width: 32px;
    height: 32px;
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

  .theme-selector-toggle {
    width: 32px;
    height: 32px;
  }

  .theme-menu {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
