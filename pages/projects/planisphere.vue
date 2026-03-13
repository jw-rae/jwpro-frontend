<template>
  <div class="project-shell">
    <AppHeader />
    <main class="project-main">
      <iframe
        class="project-frame"
        src="/apps/planisphere/"
        title="Planisphere — Interactive Star Chart"
        allowfullscreen
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Planisphere | Jacqueline Williams',
  description: 'Interactive digital planisphere — a nostalgic star-chart toy. Rotate the sky wheel to explore constellations visible from any latitude.',
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
