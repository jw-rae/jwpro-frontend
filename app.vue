<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Initialize theme based on user preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'default'
  const savedColorScheme = localStorage.getItem('colorScheme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  
  document.documentElement.setAttribute('data-theme', savedTheme)
  document.documentElement.setAttribute('data-color-scheme', savedColorScheme)
})
</script>

<style>
@import './assets/css/foundations.css';
@import './assets/css/themes.css';
@import './assets/css/utilities.css';
</style>
