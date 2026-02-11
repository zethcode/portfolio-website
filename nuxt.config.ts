// https://nuxt.com/docs/api/configuration/nuxt-config

// Staging (GitHub Pages) sets NUXT_APP_BASE_URL=/portfolio-website/ via the workflow.
// Production (Cloudflare Pages) does not set it, so it defaults to "/".
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
  ],

  site: {
    url: 'https://arckiejadulco.dev',
    name: 'Arckie Jadulco',
    description: 'Software Engineer crafting elegant digital experiences with clean code and thoughtful design.',
    defaultLocale: 'en',
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Arckie Jadulco',
      alternateName: 'Arckie Jadulco',
      url: 'https://arckiejadulco.dev',
      image: 'https://arckiejadulco.dev/images/profile-cowboy-hat-1.jpg',
      jobTitle: 'Senior Software Engineer',
      worksFor: { type: 'Organization', name: 'Arch Global Services' },
      alumniOf: { type: 'CollegeOrUniversity', name: 'University of San Carlos' },
      knowsAbout: ['Python', 'TypeScript', 'Azure', 'Django', 'Vue.js', 'Nuxt'],
      sameAs: [
        'https://github.com/zethcode',
        'https://www.linkedin.com/in/arckie-jadulco/',
      ],
    },
  },

  robots: {
    disallow: ['/resume'],
  },

  sitemap: {
    exclude: ['/resume'],
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
      titleTemplate: '%s | Arckie Jadulco',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1a1a1f' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  image: {
    provider: 'none',
  },

  runtimeConfig: {
    resendApiKey: '',
  },

  nitro: {
    preset: 'cloudflare-pages',
    rollupConfig: {
      plugins: [
        {
          name: 'native-node-process',
          resolveId(id: string) {
            if (id.includes('unenv') && id.includes('process')) {
              return { id: '\0native-process', moduleSideEffects: false }
            }
            if (id === '@react-email/render') return id
          },
          load(id: string) {
            if (id === '\0native-process') {
              return `
                import process from 'node:process';
                export default process;
                export const { env, argv, argv0, version, versions, pid, ppid, platform, arch, release,
                  cwd, chdir, exit, exitCode, stdout, stderr, stdin, hrtime, nextTick,
                  on, off, emit, addListener, removeListener, listeners } = process;
              `
            }
            if (id === '@react-email/render') return 'export default {}'
          },
        },
      ],
      external: ['node:process'],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
