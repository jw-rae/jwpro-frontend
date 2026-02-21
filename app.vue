<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Prevent theme flash by setting theme immediately
useHead({
  script: [
    {
      innerHTML: `
        (function() {
          const savedTheme = localStorage.getItem('theme') || 'default';
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          if (savedTheme !== 'default') {
            document.documentElement.setAttribute('data-theme', savedTheme);
          }
          if (prefersDark) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
      type: 'text/javascript',
      tagPosition: 'head'
    }
  ]
})
</script>

<style>
@import '@jwrae/design-tokens/foundations';
@import '@jwrae/design-tokens/themes';
@import '@jwrae/design-tokens/utilities';

/* Global button styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--duration-200) var(--ease-out);
  white-space: nowrap;
}

.btn-primary {
  background: var(--color-brand-primary-500);
  color: white;
  border-color: var(--color-brand-primary-500);
}

.btn-primary:hover {
  background: var(--color-brand-primary-600);
  border-color: var(--color-brand-primary-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border-primary);
}

.btn-secondary:hover {
  background: var(--color-surface-secondary);
  border-color: var(--color-border-interactive);
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: var(--color-brand-primary-500);
  border-color: transparent;
}

.btn-ghost:hover {
  background: color-mix(in srgb, var(--color-brand-primary-500) 10%, transparent);
}

.btn-lg {
  padding: var(--space-md) var(--space-xl);
  font-size: var(--font-size-lg);
}

/* Container utilities */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
</style>
