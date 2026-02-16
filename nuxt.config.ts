// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Static site generation for Azure Static Web Apps
  ssr: true,
  
  // App Configuration
  app: {
    head: {
      title: 'Jack George | GIS Engineer & Cloud Architect',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional portfolio showcasing GIS engineering, Azure cloud architecture, and technical expertise.' },
        { name: 'theme-color', content: '#3b82f6' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // Build configuration for static export
  nitro: {
    preset: 'static'
  }
})
