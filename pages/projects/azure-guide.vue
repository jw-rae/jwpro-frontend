<template>
  <div class="project-shell">
    <AppHeader />
    <main class="project-main">
      <iframe
        class="project-frame"
        src="/apps/azure-guide/"
        title="Azure Review — Glossary & Decisions"
        allowfullscreen
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Azure Review | Jacqueline Williams',
  description: 'Interactive Azure architecture reference — browse architectural decisions, compare cloud services, and explore design patterns for your next project.',
})
</script>

<style scoped>
.project-shell {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
}

.project-main {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
}

.project-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
