<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend',
    icon: 'i-lucide-layout',
    skills: [
      { name: 'Vue.js / Nuxt', icon: 'i-lucide-component', level: 'expert' as const },
      { name: 'React / Next.js', icon: 'i-lucide-atom', level: 'advanced' as const },
      { name: 'TypeScript', icon: 'i-lucide-file-code', level: 'expert' as const },
      { name: 'Tailwind CSS', icon: 'i-lucide-palette', level: 'expert' as const },
    ],
  },
  {
    title: 'Backend',
    icon: 'i-lucide-server',
    skills: [
      { name: 'Node.js', icon: 'i-lucide-hexagon', level: 'expert' as const },
      { name: 'Python', icon: 'i-lucide-code', level: 'advanced' as const },
      { name: 'PostgreSQL', icon: 'i-lucide-database', level: 'advanced' as const },
      { name: 'REST / GraphQL', icon: 'i-lucide-network', level: 'expert' as const },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: 'i-lucide-settings',
    skills: [
      { name: 'Git / GitHub', icon: 'i-lucide-git-branch', level: 'expert' as const },
      { name: 'Docker', icon: 'i-lucide-container', level: 'advanced' as const },
      { name: 'AWS / Vercel', icon: 'i-lucide-cloud', level: 'advanced' as const },
      { name: 'CI/CD', icon: 'i-lucide-workflow', level: 'intermediate' as const },
    ],
  },
]
</script>

<template>
  <section id="skills" class="section-spacing bg-[var(--color-bg-secondary)]">
    <div class="container-narrow">
      <!-- Section Header -->
      <div class="text-center">
        <p class="font-mono text-sm text-[var(--color-accent-primary)]">
          // Skills & Expertise
        </p>
        <h2 class="heading-section mt-4">
          Technologies I work with
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-body md:text-body-lg">
          I'm constantly learning and expanding my toolkit. Here are the technologies
          I use most frequently to bring ideas to life.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-6"
        >
          <!-- Category Header -->
          <div class="mb-6 flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-accent-primary)]"
            >
              <UIcon :name="category.icon" class="h-5 w-5" />
            </div>
            <h3 class="font-display text-lg font-semibold text-[var(--color-text-primary)]">
              {{ category.title }}
            </h3>
          </div>

          <!-- Skills List -->
          <div class="space-y-3">
            <UiSkillCard
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
              :level="skill.level"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
