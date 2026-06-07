<template>
  <div class="project-shell">
    <AppHeader />
    <main class="project-main">
      <iframe
        class="project-frame"
        src="/apps/examen-civique/"
        title="Examen Civique — Interactive Civic Knowledge QCM"
        allowfullscreen
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Examen Civique | Jacqueline Williams',
  description: 'Interactive QCM exam simulation for civic knowledge. Test your understanding of civics with dynamic questions and instant feedback.',
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
