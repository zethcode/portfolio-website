<script setup lang="ts">
const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Arch Global Services (Philippines) Inc.',
    period: '2024 - Present',
    description: 'Backend development for insurance claims orchestration system. Building Azure Functions and Python services for claim scoring workflows used by claims specialists.',
    technologies: ['Python', 'Azure Functions', 'MSSQL', 'REST APIs'],
  },
  {
    title: 'Full Stack Developer',
    company: 'TV Startup Inc.',
    period: 'Nov 2023 - 2024',
    description: 'Built CMS with Django APIs and Kubernetes integration. Set up DevOps pipelines with Jenkins and Docker on Oracle Cloud bare metal servers.',
    technologies: ['Python', 'Django', 'Angular', 'Kubernetes', 'Oracle Cloud'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Navagis',
    period: 'Oct 2021 - Nov 2023',
    description: 'Developed business applications with Google Maps integration. Handled frontend enhancements, security upgrades, and GCP server management.',
    technologies: ['C#', '.NET', 'Python', 'Django', 'PostgreSQL', 'ReactJS', 'GCP'],
  },
  {
    title: 'SQL Developer',
    company: 'Signant Health',
    period: 'Nov 2021 - Aug 2022',
    description: 'Built data applications for digitizing customer records. Created stored procedures, data migrations, and custom functions via MSSQL.',
    technologies: ['MSSQL', 'SSMS', 'Git', 'Bitbucket', 'JIRA'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Accenture',
    period: '2018 - 2021',
    description: 'Developed CRM web features for consumer goods company. Implemented CI/CD with TFS and Azure DevOps. Led client requirement discussions.',
    technologies: ['C#', '.NET', 'MSSQL', 'ReactJS', 'JavaScript', 'Azure DevOps'],
  },
]
</script>

<template>
  <section id="experience" class="section-spacing bg-[var(--color-bg-secondary)]">
    <div class="container-narrow">
      <div class="grid gap-8 lg:grid-cols-[1fr,2fr] lg:gap-16">
        <!-- Left Column - Sticky Header -->
        <div class="lg:top-24 lg:self-start">
          <p class="font-mono text-sm text-[var(--color-accent-primary)]">
            // Experience
          </p>
          <h2 class="heading-section mt-4">
            My professional journey
          </h2>
          <p class="mt-4 text-body md:text-body-lg">
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
