<template>
  <div class="project-shell">
    <AppHeader />
    <main class="project-main">
      <iframe
        class="project-frame"
        src="/apps/digital-terrain-model-viewer/"
        title="Digital Terrain Model Viewer — Interactive Terrain Analysis"
        allowfullscreen
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Digital Terrain Model Viewer | Jacqueline Williams',
  description: 'Interactive browser-based viewer for Digital Terrain Models. Visualise and analyse high-resolution USGS GeoTIFF elevation data directly in the browser.',
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
