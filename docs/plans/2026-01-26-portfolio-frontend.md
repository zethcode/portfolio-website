# Arckie Jadulco Portfolio - Frontend Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a dark-themed, minimalist portfolio website for Arckie Jadulco (Full Stack Developer) using Nuxt 3, Vue 3, and Tailwind CSS with a "Soft Muted Dark" aesthetic.

**Architecture:** Single-page application with Nuxt 3 SSG (Static Site Generation) for optimal performance. Nuxt Content module for Markdown-based blog posts. Component-based architecture with reusable UI components. Tailwind CSS for styling with custom design tokens.

**Tech Stack:** Nuxt 3, Vue 3 (Composition API), Tailwind CSS, Nuxt Content (for blog), TypeScript, Nuxt Image (for optimization)

---

## Design System: Soft Muted Dark Aesthetic

### Color Palette
```
--color-bg-primary: #1a1a1f        /* Deep charcoal, main background */
--color-bg-secondary: #242429      /* Slightly lighter, cards/sections */
--color-bg-tertiary: #2d2d33       /* Hover states, elevated elements */
--color-text-primary: #e8e6e3      /* Warm off-white, main text */
--color-text-secondary: #9d9a95    /* Muted gray, secondary text */
--color-text-muted: #6b6965        /* Subtle gray, captions */
--color-accent-primary: #c9a87c    /* Warm gold/amber, primary accent */
--color-accent-secondary: #8fa3a8  /* Soft sage/teal, secondary accent */
--color-border: #3a3a40            /* Subtle borders */
--color-glow: rgba(201, 168, 124, 0.15) /* Soft glow effect */
```

### Typography
- **Display/Headings:** "Playfair Display" (serif) - elegant, distinctive
- **Body:** "Source Sans 3" (sans-serif) - clean, readable
- **Mono/Code:** "JetBrains Mono" - for code snippets

### Design Principles
- Generous whitespace and breathing room
- Subtle shadows and soft glows (no harsh contrasts)
- Gentle animations (ease-out, 300-500ms)
- Layered depth through opacity and subtle gradients
- Grain texture overlay for warmth

---

## Pages & Sections

1. **Home** - Hero with name, title, brief tagline, CTA buttons
2. **About** - Personal story, philosophy, photo placeholder
3. **Skills** - Tech stack visualization (categorized: Frontend, Backend, DevOps, Tools)
4. **Projects** - Project cards with placeholder content (6 projects)
5. **Experience** - Timeline of work history + downloadable PDF resume
6. **Blog** - Markdown-powered articles listing
7. **Contact** - Contact form + social links

---

## Task 1: Project Initialization

**Files:**
- Create: `~/workspace/web/portfolio/` (Nuxt project root)
- Create: `nuxt.config.ts`
- Create: `package.json`
- Create: `tailwind.config.ts`
- Create: `tsconfig.json`

**Step 1: Initialize Nuxt 3 project**

Run:
```bash
cd ~/workspace/web/portfolio && npx nuxi@latest init . --force --packageManager npm
```

Expected: Nuxt project scaffolded with basic files

**Step 2: Install dependencies**

Run:
```bash
cd ~/workspace/web/portfolio && npm install
```

Expected: Dependencies installed successfully

**Step 3: Install Tailwind CSS and additional modules**

Run:
```bash
cd ~/workspace/web/portfolio && npm install -D @nuxtjs/tailwindcss @nuxtjs/google-fonts @nuxt/content @nuxt/image
```

Expected: Tailwind, Google Fonts, Content, and Image modules installed

**Step 4: Verify installation runs**

Run:
```bash
cd ~/workspace/web/portfolio && npm run dev -- --port 3000 &
sleep 5 && curl -s http://localhost:3000 | head -20
kill %1 2>/dev/null
```

Expected: Nuxt dev server starts, returns HTML

**Step 5: Initialize git repository**

Run:
```bash
cd ~/workspace/web/portfolio && git init && git add -A && git commit -m "chore: initialize Nuxt 3 project with Tailwind CSS"
```

Expected: Initial commit created

---

## Task 2: Configure Nuxt and Tailwind

**Files:**
- Modify: `nuxt.config.ts`
- Create: `tailwind.config.ts`
- Create: `assets/css/main.css`

**Step 1: Configure nuxt.config.ts**

Replace `nuxt.config.ts` with:

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      'Playfair Display': [400, 500, 600, 700],
      'Source Sans 3': [300, 400, 500, 600],
      'JetBrains Mono': [400, 500],
    },
    display: 'swap',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  app: {
    head: {
      title: 'Arckie Jadulco | Full Stack Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Arckie Jadulco - Full Stack Developer specializing in modern web technologies.' },
        { name: 'theme-color', content: '#1a1a1f' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],
})
```

**Step 2: Create Tailwind config**

Create `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1a1a1f',
          secondary: '#242429',
          tertiary: '#2d2d33',
        },
        text: {
          primary: '#e8e6e3',
          secondary: '#9d9a95',
          muted: '#6b6965',
        },
        accent: {
          primary: '#c9a87c',
          secondary: '#8fa3a8',
        },
        border: '#3a3a40',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 40px rgba(201, 168, 124, 0.15)',
      },
      backgroundImage: {
        'grain': "url('/textures/grain.svg')",
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
```

**Step 3: Create main CSS file**

Create `assets/css/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-bg-primary text-text-primary font-body antialiased;
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen;
  }

  ::selection {
    @apply bg-accent-primary/30 text-text-primary;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-bg-secondary;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-border rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-text-muted;
  }
}

@layer components {
  .container-narrow {
    @apply max-w-5xl mx-auto px-6 lg:px-8;
  }

  .section-spacing {
    @apply py-20 md:py-28;
  }

  .heading-display {
    @apply font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight;
  }

  .heading-section {
    @apply font-display text-2xl md:text-3xl font-medium;
  }

  .text-body {
    @apply font-body text-base md:text-lg text-text-secondary leading-relaxed;
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-bg-primary font-body font-medium rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02];
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-body font-medium rounded-lg transition-all duration-300 hover:border-accent-primary hover:text-accent-primary;
  }

  .card {
    @apply bg-bg-secondary rounded-2xl p-6 border border-border/50 transition-all duration-300 hover:border-border hover:shadow-soft;
  }

  .link-underline {
    @apply relative inline-block text-accent-primary after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full;
  }
}

@layer utilities {
  .grain-overlay {
    @apply pointer-events-none fixed inset-0 z-50 opacity-[0.03];
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
```

**Step 4: Verify Tailwind config works**

Run:
```bash
cd ~/workspace/web/portfolio && npm run dev -- --port 3000 &
sleep 8 && curl -s http://localhost:3000 | grep -o 'tailwind\|css' | head -5
kill %1 2>/dev/null
```

Expected: Dev server runs without errors

**Step 5: Commit configuration**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: configure Tailwind CSS with custom design tokens and typography"
```

---

## Task 3: Create Base Layout and Navigation

**Files:**
- Create: `layouts/default.vue`
- Create: `components/TheHeader.vue`
- Create: `components/TheFooter.vue`
- Create: `components/TheMobileMenu.vue`
- Modify: `app.vue`

**Step 1: Create default layout**

Create `layouts/default.vue`:

```vue
<script setup lang="ts">
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <!-- Grain overlay for texture -->
    <div class="grain-overlay" aria-hidden="true" />

    <!-- Ambient background glow -->
    <div
      class="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-accent-primary/5 via-transparent to-transparent pointer-events-none blur-3xl"
      aria-hidden="true"
    />

    <TheHeader @toggle-menu="isMenuOpen = !isMenuOpen" />

    <TheMobileMenu
      :is-open="isMenuOpen"
      @close="closeMenu"
    />

    <main class="flex-1">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
```

**Step 2: Create header component**

Create `components/TheHeader.vue`:

```vue
<script setup lang="ts">
const emit = defineEmits<{
  toggleMenu: []
}>()

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-bg-primary/80 backdrop-blur-lg border-b border-border/50'
        : 'bg-transparent'
    ]"
  >
    <div class="container-narrow">
      <nav class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="font-display text-xl font-medium text-text-primary hover:text-accent-primary transition-colors"
        >
          AJ<span class="text-accent-primary">.</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.label">
            <NuxtLink
              :to="link.href"
              class="text-sm font-body text-text-secondary hover:text-text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-primary after:transition-all hover:after:w-full"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
          @click="emit('toggleMenu')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>
```

**Step 3: Create mobile menu component**

Create `components/TheMobileMenu.vue`:

```vue
<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <Teleport to="body">
    <Transition name="menu">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 md:hidden"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-bg-primary/95 backdrop-blur-lg"
          @click="emit('close')"
        />

        <!-- Menu Content -->
        <div class="relative flex flex-col items-center justify-center h-full">
          <!-- Close Button -->
          <button
            class="absolute top-6 right-6 p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
            @click="emit('close')"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Navigation Links -->
          <nav class="flex flex-col items-center gap-8">
            <NuxtLink
              v-for="(link, index) in navLinks"
              :key="link.label"
              :to="link.href"
              class="font-display text-3xl text-text-primary hover:text-accent-primary transition-colors"
              :style="{ animationDelay: `${index * 50}ms` }"
              @click="emit('close')"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-active nav a {
  animation: slideIn 0.4s ease-out forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```

**Step 4: Create footer component**

Create `components/TheFooter.vue`:

```vue
<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
]
</script>

<template>
  <footer class="border-t border-border/50">
    <div class="container-narrow py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Copyright -->
        <p class="text-sm text-text-muted">
          &copy; {{ currentYear }} Arckie Jadulco. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-accent-primary transition-colors"
          >
            <!-- GitHub -->
            <svg v-if="social.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <!-- LinkedIn -->
            <svg v-else-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <!-- Twitter -->
            <svg v-else-if="social.icon === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
```

**Step 5: Update app.vue**

Replace `app.vue` with:

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

**Step 6: Commit layout components**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add base layout with header, footer, and mobile navigation"
```

---

## Task 4: Create Hero Section

**Files:**
- Create: `pages/index.vue`
- Create: `components/sections/HeroSection.vue`

**Step 1: Create Hero section component**

Create `components/sections/HeroSection.vue`:

```vue
<script setup lang="ts">
const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']
const currentRoleIndex = ref(0)
const displayedRole = ref('')
const isTyping = ref(true)

let typeTimer: NodeJS.Timeout | null = null

const typeRole = () => {
  const role = roles[currentRoleIndex.value]
  let charIndex = 0
  isTyping.value = true
  displayedRole.value = ''

  const type = () => {
    if (charIndex < role.length) {
      displayedRole.value += role[charIndex]
      charIndex++
      typeTimer = setTimeout(type, 80)
    } else {
      isTyping.value = false
      typeTimer = setTimeout(eraseRole, 2000)
    }
  }

  type()
}

const eraseRole = () => {
  isTyping.value = true
  const erase = () => {
    if (displayedRole.value.length > 0) {
      displayedRole.value = displayedRole.value.slice(0, -1)
      typeTimer = setTimeout(erase, 40)
    } else {
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
      typeTimer = setTimeout(typeRole, 500)
    }
  }
  erase()
}

onMounted(() => {
  typeRole()
})

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer)
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -left-32 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-float" style="animation-delay: -3s" />
    </div>

    <div class="container-narrow relative z-10">
      <div class="max-w-3xl">
        <!-- Greeting -->
        <p class="text-text-secondary font-body text-lg mb-4 animate-fade-in">
          Hello, I'm
        </p>

        <!-- Name -->
        <h1 class="heading-display text-text-primary mb-6 animate-slide-up">
          Arckie Jadulco<span class="text-accent-primary">.</span>
        </h1>

        <!-- Animated Role -->
        <div class="h-12 mb-8 animate-slide-up" style="animation-delay: 100ms">
          <p class="font-body text-xl md:text-2xl text-accent-secondary">
            <span>{{ displayedRole }}</span>
            <span
              class="inline-block w-0.5 h-6 bg-accent-primary ml-1 align-middle"
              :class="{ 'animate-pulse': !isTyping }"
            />
          </p>
        </div>

        <!-- Description -->
        <p class="text-body max-w-xl mb-10 animate-slide-up" style="animation-delay: 200ms">
          I craft elegant digital experiences with clean code and thoughtful design.
          Passionate about building scalable solutions that make a difference.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 animate-slide-up" style="animation-delay: 300ms">
          <a href="#projects" class="btn-primary">
            View My Work
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" class="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
```

**Step 2: Create index page with Hero**

Create `pages/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Arckie Jadulco | Full Stack Developer',
})
</script>

<template>
  <div>
    <HeroSection />
    <!-- Additional sections will be added here -->
  </div>
</template>
```

**Step 3: Verify hero renders correctly**

Run:
```bash
cd ~/workspace/web/portfolio && npm run dev -- --port 3000 &
sleep 8 && curl -s http://localhost:3000 | grep -o "Arckie\|hero" | head -3
kill %1 2>/dev/null
```

Expected: Page renders with hero content

**Step 4: Commit hero section**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add hero section with typing animation"
```

---

## Task 5: Create About Section

**Files:**
- Create: `components/sections/AboutSection.vue`
- Modify: `pages/index.vue`

**Step 1: Create About section component**

Create `components/sections/AboutSection.vue`:

```vue
<script setup lang="ts">
const highlights = [
  { number: '5+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '20+', label: 'Happy Clients' },
]
</script>

<template>
  <section id="about" class="section-spacing">
    <div class="container-narrow">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image/Visual Side -->
        <div class="relative order-2 lg:order-1">
          <!-- Placeholder for profile image -->
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden bg-bg-secondary border border-border/50">
            <!-- Placeholder gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-bg-secondary to-accent-secondary/10" />

            <!-- Decorative frame -->
            <div class="absolute inset-4 border border-border/30 rounded-xl" />

            <!-- Placeholder icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-24 h-24 text-text-muted/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <!-- Floating accent card -->
          <div class="absolute -bottom-6 -right-6 p-4 bg-bg-tertiary rounded-xl border border-border/50 shadow-soft">
            <p class="font-mono text-sm text-accent-primary">
              &lt;code&gt; with passion &lt;/&gt;
            </p>
          </div>
        </div>

        <!-- Content Side -->
        <div class="order-1 lg:order-2">
          <p class="text-accent-primary font-mono text-sm mb-3">// About Me</p>
          <h2 class="heading-section text-text-primary mb-6">
            Building digital experiences that matter
          </h2>

          <div class="space-y-4 text-body mb-8">
            <p>
              I'm a Full Stack Developer with a passion for creating elegant,
              user-centric applications. My journey in tech started with curiosity
              and evolved into a career of continuous learning and problem-solving.
            </p>
            <p>
              I specialize in modern web technologies, from crafting responsive
              frontends to architecting robust backend systems. I believe in writing
              clean, maintainable code that stands the test of time.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6">
            <div v-for="stat in highlights" :key="stat.label" class="text-center lg:text-left">
              <p class="font-display text-3xl lg:text-4xl font-semibold text-accent-primary mb-1">
                {{ stat.number }}
              </p>
              <p class="text-sm text-text-muted">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Step 2: Add About section to index page**

Modify `pages/index.vue` to add AboutSection:

```vue
<script setup lang="ts">
useHead({
  title: 'Arckie Jadulco | Full Stack Developer',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <!-- Additional sections will be added here -->
  </div>
</template>
```

**Step 3: Commit about section**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add about section with stats"
```

---

## Task 6: Create Skills Section

**Files:**
- Create: `components/sections/SkillsSection.vue`
- Create: `components/ui/SkillCard.vue`
- Modify: `pages/index.vue`

**Step 1: Create SkillCard component**

Create `components/ui/SkillCard.vue`:

```vue
<script setup lang="ts">
defineProps<{
  name: string
  icon?: string
  level?: 'expert' | 'advanced' | 'intermediate'
}>()

const levelColors = {
  expert: 'bg-accent-primary',
  advanced: 'bg-accent-secondary',
  intermediate: 'bg-text-muted',
}
</script>

<template>
  <div class="group relative p-4 rounded-xl bg-bg-secondary/50 border border-border/30 hover:border-accent-primary/50 transition-all duration-300 hover:shadow-soft">
    <div class="flex items-center gap-3">
      <!-- Icon slot -->
      <div class="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center text-text-secondary group-hover:text-accent-primary transition-colors">
        <slot name="icon">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </slot>
      </div>

      <div class="flex-1">
        <p class="font-body text-sm font-medium text-text-primary">{{ name }}</p>
        <div v-if="level" class="mt-1 flex gap-1">
          <span
            v-for="i in 3"
            :key="i"
            class="w-6 h-1 rounded-full transition-colors"
            :class="i <= (level === 'expert' ? 3 : level === 'advanced' ? 2 : 1) ? levelColors[level] : 'bg-border'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
```

**Step 2: Create Skills section component**

Create `components/sections/SkillsSection.vue`:

```vue
<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building responsive, accessible interfaces',
    skills: [
      { name: 'Vue.js / Nuxt', level: 'expert' },
      { name: 'React / Next.js', level: 'advanced' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'HTML / CSS', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
    ],
  },
  {
    title: 'Backend',
    description: 'Architecting scalable server solutions',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'Streamlining development workflows',
    skills: [
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'Docker', level: 'advanced' },
      { name: 'AWS / Cloud', level: 'intermediate' },
      { name: 'CI/CD', level: 'advanced' },
      { name: 'Linux', level: 'advanced' },
      { name: 'VS Code', level: 'expert' },
    ],
  },
]
</script>

<template>
  <section id="skills" class="section-spacing bg-bg-secondary/30">
    <div class="container-narrow">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-accent-primary font-mono text-sm mb-3">// Skills & Expertise</p>
        <h2 class="heading-section text-text-primary mb-4">
          Technologies I Work With
        </h2>
        <p class="text-body">
          A curated collection of tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="card"
        >
          <h3 class="font-display text-xl font-medium text-text-primary mb-2">
            {{ category.title }}
          </h3>
          <p class="text-sm text-text-muted mb-6">
            {{ category.description }}
          </p>

          <div class="space-y-3">
            <SkillCard
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level as 'expert' | 'advanced' | 'intermediate'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Step 3: Add Skills section to index page**

Modify `pages/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Arckie Jadulco | Full Stack Developer',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <!-- Additional sections will be added here -->
  </div>
</template>
```

**Step 4: Commit skills section**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add skills section with categorized skill cards"
```

---

## Task 7: Create Projects Section

**Files:**
- Create: `components/sections/ProjectsSection.vue`
- Create: `components/ui/ProjectCard.vue`
- Modify: `pages/index.vue`

**Step 1: Create ProjectCard component**

Create `components/ui/ProjectCard.vue`:

```vue
<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}>()
</script>

<template>
  <article
    class="group card overflow-hidden"
    :class="featured ? 'md:col-span-2' : ''"
  >
    <!-- Project Image -->
    <div
      class="relative aspect-video mb-6 rounded-lg overflow-hidden bg-bg-tertiary"
      :class="featured ? 'md:aspect-[21/9]' : ''"
    >
      <!-- Placeholder gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-bg-tertiary to-accent-secondary/20" />

      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-accent-primary rounded-full text-bg-primary hover:scale-110 transition-transform"
          aria-label="View live demo"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 bg-bg-secondary border border-border rounded-full text-text-primary hover:scale-110 transition-transform"
          aria-label="View source code"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      <!-- Featured badge -->
      <div
        v-if="featured"
        class="absolute top-4 left-4 px-3 py-1 bg-accent-primary/90 rounded-full text-xs font-medium text-bg-primary"
      >
        Featured
      </div>
    </div>

    <!-- Project Info -->
    <div>
      <h3 class="font-display text-xl font-medium text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
        {{ title }}
      </h3>
      <p class="text-body text-sm mb-4 line-clamp-2">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-1 text-xs font-mono text-text-muted bg-bg-tertiary rounded"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
```

**Step 2: Create Projects section component**

Create `components/sections/ProjectsSection.vue`:

```vue
<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    featured: true,
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team workspaces.',
    tags: ['React', 'TypeScript', 'Firebase'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts, interactive maps, and historical data visualization.',
    tags: ['Vue.js', 'D3.js', 'OpenWeather API'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Blog CMS',
    description: 'Headless CMS for content creators with markdown support, media management, and SEO optimization tools.',
    tags: ['Nuxt', 'Prisma', 'AWS S3'],
    featured: true,
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Personal health companion app with workout logging, progress charts, and goal setting features.',
    tags: ['React Native', 'GraphQL', 'MongoDB'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI tool that generates beautiful portfolio websites from a simple config file.',
    tags: ['Node.js', 'CLI', 'Templates'],
    repoUrl: '#',
  },
]
</script>

<template>
  <section id="projects" class="section-spacing">
    <div class="container-narrow">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-accent-primary font-mono text-sm mb-3">// Selected Work</p>
        <h2 class="heading-section text-text-primary mb-4">
          Projects I've Built
        </h2>
        <p class="text-body">
          A showcase of projects that demonstrate my skills and passion for building great software.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>

      <!-- View More -->
      <div class="text-center mt-12">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          View More on GitHub
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
```

**Step 3: Add Projects section to index page**

Modify `pages/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Arckie Jadulco | Full Stack Developer',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <!-- Additional sections will be added here -->
  </div>
</template>
```

**Step 4: Commit projects section**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add projects section with featured project cards"
```

---

## Task 8: Create Experience Section

**Files:**
- Create: `components/sections/ExperienceSection.vue`
- Create: `components/ui/TimelineItem.vue`
- Create: `public/resume.pdf` (placeholder)
- Modify: `pages/index.vue`

**Step 1: Create TimelineItem component**

Create `components/ui/TimelineItem.vue`:

```vue
<script setup lang="ts">
defineProps<{
  title: string
  company: string
  period: string
  description: string
  technologies?: string[]
  isLast?: boolean
}>()
</script>

<template>
  <div class="relative pl-8 pb-12" :class="{ 'pb-0': isLast }">
    <!-- Timeline line -->
    <div
      v-if="!isLast"
      class="absolute left-[11px] top-6 bottom-0 w-px bg-border"
    />

    <!-- Timeline dot -->
    <div class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-bg-secondary border-2 border-accent-primary flex items-center justify-center">
      <div class="w-2 h-2 rounded-full bg-accent-primary" />
    </div>

    <!-- Content -->
    <div class="card">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <h3 class="font-display text-lg font-medium text-text-primary">
            {{ title }}
          </h3>
          <p class="text-accent-secondary font-body">{{ company }}</p>
        </div>
        <span class="text-sm text-text-muted font-mono shrink-0">
          {{ period }}
        </span>
      </div>

      <p class="text-body text-sm mb-4">
        {{ description }}
      </p>

      <div v-if="technologies?.length" class="flex flex-wrap gap-2">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="px-2 py-1 text-xs font-mono text-accent-primary bg-accent-primary/10 rounded"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
```

**Step 2: Create Experience section component**

Create `components/sections/ExperienceSection.vue`:

```vue
<script setup lang="ts">
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions for high-traffic systems.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency Ltd.',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client projects, implemented CI/CD pipelines, and collaborated with cross-functional teams to deliver high-quality software.',
    technologies: ['React', 'Python', 'Docker', 'MongoDB'],
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Hub',
    period: '2019 - 2020',
    description: 'Developed responsive user interfaces, optimized web performance, and contributed to design system development.',
    technologies: ['JavaScript', 'CSS', 'Webpack', 'Figma'],
  },
  {
    title: 'Junior Developer',
    company: 'Code Academy',
    period: '2018 - 2019',
    description: 'Started programming journey, learned fundamentals of web development, and worked on various training projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
]
</script>

<template>
  <section id="experience" class="section-spacing bg-bg-secondary/30">
    <div class="container-narrow">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Left: Header & Resume -->
        <div class="lg:sticky lg:top-24 lg:self-start">
          <p class="text-accent-primary font-mono text-sm mb-3">// Career Journey</p>
          <h2 class="heading-section text-text-primary mb-4">
            Work Experience
          </h2>
          <p class="text-body mb-8">
            My professional path through the world of software development,
            from curious beginner to experienced developer.
          </p>

          <!-- Resume Download -->
          <a
            href="/resume.pdf"
            download="Arckie_Jadulco_Resume.pdf"
            class="btn-primary"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        <!-- Right: Timeline -->
        <div>
          <TimelineItem
            v-for="(exp, index) in experiences"
            :key="exp.company"
            v-bind="exp"
            :is-last="index === experiences.length - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>
```

**Step 3: Create placeholder resume PDF notice**

Create `public/.gitkeep` and add a note for the resume:

```bash
touch ~/workspace/web/portfolio/public/resume.pdf
```

Note: The actual PDF should be added by the user later.

**Step 4: Add Experience section to index page**

Modify `pages/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Arckie Jadulco | Full Stack Developer',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <!-- Additional sections will be added here -->
  </div>
</template>
```

**Step 5: Commit experience section**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add experience section with timeline and resume download"
```

---

## Task 9: Create Contact Section

**Files:**
- Create: `components/sections/ContactSection.vue`
- Modify: `pages/index.vue`

**Step 1: Create Contact section component**

Create `components/sections/ContactSection.vue`:

```vue
<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Placeholder for form submission logic
  // Will be connected to backend later
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  isSubmitted.value = true

  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''

  // Reset success state after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
  }, 3000)
}

const contactInfo = [
  {
    icon: 'email',
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'Philippines',
  },
  {
    icon: 'availability',
    label: 'Availability',
    value: 'Open to opportunities',
  },
]
</script>

<template>
  <section id="contact" class="section-spacing">
    <div class="container-narrow">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-accent-primary font-mono text-sm mb-3">// Get In Touch</p>
        <h2 class="heading-section text-text-primary mb-4">
          Let's Work Together
        </h2>
        <p class="text-body">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact Info -->
        <div>
          <div class="space-y-6 mb-8">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-start gap-4"
            >
              <div class="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0">
                <!-- Email icon -->
                <svg v-if="info.icon === 'email'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <!-- Location icon -->
                <svg v-else-if="info.icon === 'location'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <!-- Availability icon -->
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-text-muted mb-1">{{ info.label }}</p>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="text-text-primary hover:text-accent-primary transition-colors"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-text-primary">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social links reminder -->
          <p class="text-sm text-text-muted">
            You can also find me on
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="link-underline">GitHub</a>,
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="link-underline">LinkedIn</a>, and
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="link-underline">Twitter</a>.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="card">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-text-secondary mb-2">
                Name
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full justify-center"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else-if="isSubmitted" class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Message Sent!
              </span>
              <span v-else class="flex items-center gap-2">
                Send Message
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Step 2: Add Contact section to index page (final version)**

Modify `pages/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Arckie Jadulco | Full Stack Developer',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>
```

**Step 3: Commit contact section**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add contact section with form and contact info"
```

---

## Task 10: Create Blog Page Structure

**Files:**
- Create: `pages/blog/index.vue`
- Create: `pages/blog/[slug].vue`
- Create: `content/blog/hello-world.md`
- Create: `components/ui/BlogCard.vue`

**Step 1: Create BlogCard component**

Create `components/ui/BlogCard.vue`:

```vue
<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  slug: string
  readingTime?: string
  tags?: string[]
}>()

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="card group">
    <NuxtLink :to="`/blog/${slug}`" class="block">
      <!-- Date & Reading Time -->
      <div class="flex items-center gap-3 text-sm text-text-muted mb-3">
        <time :datetime="date">{{ formatDate(date) }}</time>
        <span v-if="readingTime" class="flex items-center gap-1">
          <span class="w-1 h-1 rounded-full bg-text-muted" />
          {{ readingTime }}
        </span>
      </div>

      <!-- Title -->
      <h2 class="font-display text-xl font-medium text-text-primary group-hover:text-accent-primary transition-colors mb-2">
        {{ title }}
      </h2>

      <!-- Description -->
      <p class="text-body text-sm mb-4 line-clamp-2">
        {{ description }}
      </p>

      <!-- Tags -->
      <div v-if="tags?.length" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-1 text-xs font-mono text-text-muted bg-bg-tertiary rounded"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Read more indicator -->
      <div class="mt-4 flex items-center gap-2 text-sm text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Read article
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </NuxtLink>
  </article>
</template>
```

**Step 2: Create blog index page**

Create `pages/blog/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Blog | Arckie Jadulco',
})

const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryContent('blog')
    .sort({ date: -1 })
    .find()
})
</script>

<template>
  <div class="pt-24">
    <section class="section-spacing">
      <div class="container-narrow">
        <!-- Page Header -->
        <div class="max-w-2xl mb-16">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </NuxtLink>

          <p class="text-accent-primary font-mono text-sm mb-3">// Blog</p>
          <h1 class="heading-display text-text-primary mb-4">
            Thoughts & Writings
          </h1>
          <p class="text-body">
            Articles about web development, technology, and my journey as a developer.
          </p>
        </div>

        <!-- Blog Posts Grid -->
        <div v-if="posts?.length" class="grid md:grid-cols-2 gap-6">
          <BlogCard
            v-for="post in posts"
            :key="post._path"
            :title="post.title || 'Untitled'"
            :description="post.description || ''"
            :date="post.date || ''"
            :slug="post._path?.replace('/blog/', '') || ''"
            :reading-time="post.readingTime"
            :tags="post.tags"
          />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <p class="text-text-muted">No posts yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
```

**Step 3: Create blog post page**

Create `pages/blog/[slug].vue`:

```vue
<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => {
  return queryContent('blog', route.params.slug as string).findOne()
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

useHead({
  title: `${post.value?.title} | Arckie Jadulco`,
  meta: [
    { name: 'description', content: post.value?.description },
  ],
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="pt-24">
    <article class="section-spacing">
      <div class="container-narrow">
        <!-- Back Link -->
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </NuxtLink>

        <!-- Post Header -->
        <header class="max-w-3xl mb-12">
          <div class="flex items-center gap-3 text-sm text-text-muted mb-4">
            <time v-if="post?.date" :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span v-if="post?.readingTime" class="flex items-center gap-1">
              <span class="w-1 h-1 rounded-full bg-text-muted" />
              {{ post.readingTime }}
            </span>
          </div>

          <h1 class="heading-display text-text-primary mb-6">
            {{ post?.title }}
          </h1>

          <p v-if="post?.description" class="text-body text-lg">
            {{ post.description }}
          </p>

          <!-- Tags -->
          <div v-if="post?.tags?.length" class="flex flex-wrap gap-2 mt-6">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1 text-sm font-mono text-accent-primary bg-accent-primary/10 rounded"
            >
              #{{ tag }}
            </span>
          </div>
        </header>

        <!-- Post Content -->
        <div class="prose prose-invert prose-lg max-w-3xl">
          <ContentRenderer v-if="post" :value="post" />
        </div>
      </div>
    </article>
  </div>
</template>

<style>
.prose {
  @apply text-text-secondary;
}

.prose h2 {
  @apply font-display text-2xl font-medium text-text-primary mt-12 mb-4;
}

.prose h3 {
  @apply font-display text-xl font-medium text-text-primary mt-8 mb-3;
}

.prose p {
  @apply mb-6 leading-relaxed;
}

.prose a {
  @apply text-accent-primary hover:underline;
}

.prose code {
  @apply font-mono text-sm bg-bg-secondary px-2 py-1 rounded;
}

.prose pre {
  @apply bg-bg-secondary rounded-lg p-4 overflow-x-auto my-6;
}

.prose pre code {
  @apply bg-transparent p-0;
}

.prose ul, .prose ol {
  @apply my-6 pl-6;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-2 border-accent-primary pl-4 italic text-text-muted my-6;
}

.prose img {
  @apply rounded-lg my-8;
}
</style>
```

**Step 4: Create sample blog post**

Create `content/blog/hello-world.md`:

```markdown
---
title: "Hello World: My First Blog Post"
description: "Welcome to my blog! In this first post, I share why I started writing and what you can expect from this space."
date: "2026-01-26"
readingTime: "3 min read"
tags: ["personal", "introduction"]
---

Welcome to my blog! This is my corner of the internet where I'll be sharing my thoughts, learnings, and experiences as a developer.

## Why I Started Writing

I believe that writing is one of the best ways to solidify your understanding of a topic. When you try to explain something, you often discover gaps in your own knowledge that you need to fill.

## What to Expect

Here are some topics I plan to cover:

- **Technical tutorials** - Deep dives into web development concepts
- **Project breakdowns** - Behind-the-scenes looks at projects I build
- **Career insights** - Lessons learned throughout my journey
- **Tool reviews** - My thoughts on developer tools and technologies

## Let's Connect

I'd love to hear from you! Feel free to reach out through the contact form on my website or connect with me on social media.

Thanks for reading, and stay tuned for more content!
```

**Step 5: Create content directory structure**

Run:
```bash
mkdir -p ~/workspace/web/portfolio/content/blog
```

**Step 6: Commit blog structure**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add blog pages with Nuxt Content integration"
```

---

## Task 11: Add Animations and Polish

**Files:**
- Modify: `assets/css/main.css`
- Create: `plugins/scroll-reveal.client.ts`

**Step 1: Create scroll reveal plugin**

Create `plugins/scroll-reveal.client.ts`:

```typescript
export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  })

  // Observe elements after DOM is ready
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  }, 100)
})
```

**Step 2: Add reveal animation styles**

Add to `assets/css/main.css` (at the end of the file):

```css
/* Scroll reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }

/* Focus styles for accessibility */
:focus-visible {
  @apply outline-2 outline-offset-2 outline-accent-primary;
}

/* Smooth image loading */
img {
  @apply transition-opacity duration-300;
}

img[loading] {
  @apply opacity-0;
}

img:not([loading]) {
  @apply opacity-100;
}
```

**Step 3: Commit animations**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "feat: add scroll reveal animations and polish"
```

---

## Task 12: Final Testing and Verification

**Files:**
- None (testing only)

**Step 1: Run development server**

Run:
```bash
cd ~/workspace/web/portfolio && npm run dev -- --port 3000
```

Expected: Server starts without errors

**Step 2: Test all pages load**

In a new terminal:
```bash
curl -s http://localhost:3000 | grep -o "Arckie Jadulco"
curl -s http://localhost:3000/blog | grep -o "Blog"
```

Expected: Both pages return content

**Step 3: Test static generation**

Run:
```bash
cd ~/workspace/web/portfolio && npm run generate
```

Expected: Static site generates without errors

**Step 4: Final commit**

Run:
```bash
cd ~/workspace/web/portfolio && git add -A && git commit -m "chore: complete frontend implementation"
```

---

## Summary

This plan creates a complete portfolio frontend with:

### Pages
- **Home** - Hero, About, Skills, Projects, Experience, Contact sections
- **Blog** - Markdown-powered blog with listing and detail pages

### Components
- Reusable UI components (SkillCard, ProjectCard, BlogCard, TimelineItem)
- Layout components (TheHeader, TheFooter, TheMobileMenu)
- Section components (all main page sections)

### Features
- Dark "Soft Muted Dark" theme with warm accents
- Responsive design (mobile-first)
- Smooth animations and transitions
- Typing animation in hero
- Scroll reveal effects
- Downloadable resume
- Contact form (frontend only, backend integration later)
- Blog with Nuxt Content (Markdown support)

### Tech Stack
- Nuxt 3 with TypeScript
- Tailwind CSS with custom design tokens
- Nuxt Content for blog
- Nuxt Image for optimization
- Google Fonts (Playfair Display, Source Sans 3, JetBrains Mono)

---

**Next Steps (Future Plans)**
- Backend API for contact form
- Database for dynamic content
- CMS integration
- Analytics
- SEO optimization
- Deployment (Vercel/Netlify)
