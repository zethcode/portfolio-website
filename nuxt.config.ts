// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Playfair Display': [400, 500, 600, 700],
      'Source Sans 3': [300, 400, 500, 600, 700],
      'JetBrains Mono': [400, 500, 600],
    },
    display: 'swap',
    preload: true,
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Arckie Jadulco | Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full Stack Developer crafting elegant digital experiences with clean code and thoughtful design.' },
        { name: 'theme-color', content: '#1a1a1f' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Arckie Jadulco' },
        { property: 'og:title', content: 'Arckie Jadulco | Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack Developer crafting elegant digital experiences with clean code and thoughtful design.' },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arckie Jadulco | Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Developer crafting elegant digital experiences with clean code and thoughtful design.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})