// https://nuxt.com/docs/api/configuration/nuxt-config

// Staging (GitHub Pages) sets NUXT_APP_BASE_URL=/portfolio-website/ via the workflow.
// Production (Cloudflare Pages) does not set it, so it defaults to "/".
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

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

  image: {
    static: {
      baseURL: baseURL,
    },
  },

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
    baseURL: baseURL,
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Arckie Jadulco | Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software Engineer crafting elegant digital experiences with clean code and thoughtful design.' },
        { name: 'theme-color', content: '#1a1a1f' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Arckie Jadulco' },
        { property: 'og:title', content: 'Arckie Jadulco | Software Engineer' },
        { property: 'og:description', content: 'Software Engineer crafting elegant digital experiences with clean code and thoughtful design.' },
        { property: 'og:image', content: `${baseURL}og-image.png` },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arckie Jadulco | Software Engineer' },
        { name: 'twitter:description', content: 'Software Engineer crafting elegant digital experiences with clean code and thoughtful design.' },
        { name: 'twitter:image', content: `${baseURL}og-image.png` },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      ],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})