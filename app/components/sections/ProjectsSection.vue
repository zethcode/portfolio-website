<script setup lang="ts">
const projects = [
  {
    title: 'JTransit',
    description: 'Built with a small team, conceptualized from a thesis project, JTransit helps commuters navigate Cebu\'s iconic jeepney system. If you\'ve ever stood on a street corner wondering which jeepney to flag down, this is the app for you.',
    tags: ['Mobile App', 'Python', 'Django', 'Navigation', 'Collaboration'],
    image: '/images/preview-jtransit.png',
    demoUrl: 'https://jtransit.github.io/',
    repoUrl: '',
  },
  {
    title: 'Tela At Iba Pa Clothing',
    description: 'An e-commerce storefront for a made-up clothing brand. Browse collections, add items to your cart, and check out — all the essentials, built from scratch with React and Firebase. This was a personal project built to experiment with React and Firebase.',
    tags: ['React.js', 'Firebase', 'E-commerce'],
    image: '/images/preview-tabp.png',
    demoUrl: 'https://zethcode.github.io/tabp-clothing/',
    repoUrl: 'https://github.com/zethcode/tabp-clothing',
  },
  {
    title: 'Child Health and Development Journal',
    description: 'A journaling tool for parents and caregivers to track their children\'s health milestones, vaccinations, growth progress, and healthcare records — all in one place. Built with Nuxt 4 and Supabase.',
    tags: ['Nuxt 4', 'Supabase', 'Nuxt UI', 'Tailwind CSS'],
    image: '/images/preview-child-health-journal.png',
    demoUrl: 'https://zethcode.github.io/child-health-and-development-journal/',
    repoUrl: 'https://github.com/zethcode/child-health-and-development-journal',
  },
  {
    title: 'Developer Portfolio',
    description: 'This website! Powered by Nuxt 4, Tailwind CSS, and TypeScript with SEO baked in. Oh, did I mention that I built this with the help of Claude Code? It handles everything from structured data to responsive layouts.',
    tags: ['Nuxt 4', 'Tailwind CSS', 'TypeScript'],
    image: '/images/preview-portfolio.png',
    demoUrl: 'https://arckiejadulco.dev',
    repoUrl: 'https://github.com/zethcode/portfolio-website',
  }
]
</script>

<template>
  <section id="projects" class="section-spacing">
    <div class="container-narrow">
      <!-- Section Header -->
      <div class="text-center">
        <p class="font-mono text-sm text-[var(--color-accent-primary)]">
          // Featured Work
        </p>
        <h2 class="heading-section mt-4">
          Projects I've built
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-body md:text-body-lg">
          A selection of projects that showcase my skills and passion for building
          great software. Each project represents unique challenges and solutions.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <UiProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :image="project.image"
          :demo-url="project.demoUrl"
          :repo-url="project.repoUrl"
        />
      </div>

      <!-- View More Button -->
      <div class="mt-12 text-center">
        <a
          href="https://github.com/zethcode"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
        >
          <UIcon name="i-lucide-github" class="h-5 w-5" />
          View More on GitHub
        </a>
      </div>
    </div>
  </section>
</template>
