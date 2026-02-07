<script setup lang="ts">
const projects = [
  {
    title: 'JTransit',
    description: 'A navigation app for Cebu jeepney commuters. Helps locals and visitors navigate traditional jeepney routes across the city.',
    tags: ['Mobile App', 'Python', 'Django', 'Navigation', 'Collaboration'],
    image: '/images/preview-jtransit.png',
    demoUrl: 'https://jtransit.github.io/',
    repoUrl: '',
  },
  {
    title: 'Tela At Iba Pa Clothing',
    description: 'E-commerce platform for a clothing brand. Features product catalog, cart functionality, and checkout process.',
    tags: ['React.js', 'Firebase', 'E-commerce'],
    image: '/images/preview-tabp.png',
    demoUrl: 'https://zethcode.github.io/tabp-clothing/',
    repoUrl: 'https://github.com/zethcode/tabp-clothing',
  },
  {
    title: 'Child Health and Development Journal',
    description: 'A journaling tool for your childs health and development. Features tools and resources for parents and caregivers to track milestones and progress, and also their healthcare records.',
    tags: ['Nuxt 4', 'Supabase', 'Nuxt UI', 'Tailwind CSS'],
    image: '/images/preview-child-health-journal.png',
    demoUrl: 'https://zethcode.github.io/child-health-and-development-journal/',
    repoUrl: 'https://github.com/zethcode/child-health-and-development-journal',
  },
  {
    title: 'Developer Portfolio',
    description: 'This website! A showcase built with modern web technologies and clean design principles. Oh, did I mention that I built this with Claude Code too?',
    tags: ['Nuxt 4', 'Tailwind CSS', 'TypeScript'],
    image: '/images/preview-portfolio.png',
    demoUrl: '',
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
