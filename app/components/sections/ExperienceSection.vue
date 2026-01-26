<script setup lang="ts">
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale applications. Architecting microservices, mentoring junior developers, and implementing best practices across the engineering team.',
    technologies: ['Vue.js', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Built custom web applications for diverse clients across industries. Focused on creating responsive, performant, and accessible user interfaces.',
    technologies: ['React', 'Python', 'Django', 'MongoDB'],
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Labs',
    period: '2019 - 2020',
    description: 'Developed interactive user interfaces for early-stage startups. Collaborated closely with designers to implement pixel-perfect designs.',
    technologies: ['Vue.js', 'Nuxt.js', 'SCSS', 'Firebase'],
  },
  {
    title: 'Junior Web Developer',
    company: 'Creative Studio',
    period: '2018 - 2019',
    description: 'Started my professional journey building websites and learning modern web development practices. Gained strong foundation in HTML, CSS, and JavaScript.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
  },
]
</script>

<template>
  <section id="experience" class="section-spacing bg-[var(--color-bg-secondary)]">
    <div class="container-narrow">
      <div class="grid gap-12 lg:grid-cols-[1fr,2fr] lg:gap-16">
        <!-- Left Column - Sticky Header -->
        <div class="lg:sticky lg:top-24 lg:self-start">
          <p class="font-mono text-sm text-[var(--color-accent-primary)]">
            // Experience
          </p>
          <h2 class="heading-section mt-4">
            My professional journey
          </h2>
          <p class="mt-4 text-body">
            Over the years, I've had the opportunity to work with amazing teams
            and contribute to impactful projects.
          </p>

          <!-- Download Resume Button -->
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary mt-8 inline-flex"
          >
            <UIcon name="i-lucide-download" class="h-5 w-5" />
            Download Resume
          </a>
        </div>

        <!-- Right Column - Timeline -->
        <div>
          <UiTimelineItem
            v-for="(exp, index) in experiences"
            :key="exp.company"
            :title="exp.title"
            :company="exp.company"
            :period="exp.period"
            :description="exp.description"
            :technologies="exp.technologies"
            :is-last="index === experiences.length - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>
