<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory, payment processing, and admin dashboard. Built for scale with microservices architecture.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative workspace for teams with real-time updates, Kanban boards, and time tracking features.',
    tags: ['React', 'GraphQL', 'MongoDB', 'Socket.io'],
    image: '',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'AI Writing Assistant',
    description: 'Smart content generation tool powered by GPT-4 with custom fine-tuning for specific use cases.',
    tags: ['Next.js', 'Python', 'OpenAI', 'Redis'],
    image: '',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first application for tracking workouts, nutrition, and progress with social features.',
    tags: ['React Native', 'Firebase', 'TensorFlow'],
    image: '',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours and mortgage calculator.',
    tags: ['Nuxt.js', 'Supabase', 'Mapbox'],
    image: '',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    title: 'Developer Portfolio',
    description: 'This very website! A showcase of my work built with modern web technologies.',
    tags: ['Nuxt 4', 'Tailwind CSS', 'TypeScript'],
    image: '',
    demoUrl: '',
    repoUrl: 'https://github.com',
    featured: false,
  },
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
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <UiProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :image="project.image"
          :demo-url="project.demoUrl"
          :repo-url="project.repoUrl"
          :featured="project.featured"
        />
      </div>

      <!-- View More Button -->
      <div class="mt-12 text-center">
        <a
          href="https://github.com"
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
