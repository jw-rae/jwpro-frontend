<template>
  <footer class="footer">
    <div class="footer-container">
      <span class="footer-copyright">© 2026 Jacqueline Williams</span>
      <div class="footer-links">
        <a href="https://github.com/jw-rae" target="_blank" rel="noopener" aria-label="GitHub">
          <Icon icon="mdi:github" width="18" height="18" />
        </a>
        <a href="https://www.linkedin.com/in/jacqueline-w" target="_blank" rel="noopener" aria-label="LinkedIn">
          <Icon icon="mdi:linkedin" width="18" height="18" />
        </a>
        <a href="mailto:contact@jwpro.net" aria-label="Email">
          <Icon icon="lucide:mail" width="18" height="18" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
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

/* Responsive */
@media (max-width: 768px) {
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
  .footer-copyright {
    font-size: var(--font-size-xs);
  }
}
</style>
