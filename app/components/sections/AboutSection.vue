<script setup lang="ts">
const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: 'USC', label: 'BS Computer Engineering' },
  { value: '5', label: 'Companies' },
]
</script>

<template>
  <section id="about" class="section-spacing">
    <div class="container-narrow">
      <div class="grid gap-6 sm:grid-cols-[2fr_3fr] sm:gap-8 lg:grid-cols-2 lg:gap-16">
        <!-- Image Column -->
        <div class="relative">
          <!-- Main Image Placeholder -->
          <div
            class="relative mx-auto aspect-square max-w-[280px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] sm:mx-0 sm:max-w-none"
          >
            <NuxtImg
              src="/images/profile-cowboy-hat-1.jpg"
              alt="Arckie Jadulco"
              class="h-full w-full object-cover rounded-2xl"
            />

            <!-- Decorative Frame -->
            <div
              class="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[var(--color-accent-primary)] opacity-20"
            />
          </div>
          
          <!-- Stats -->
          <div class="mt-10 grid grid-cols-3 gap-3 sm:gap-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <div class="font-display text-2xl font-bold text-[var(--color-accent-primary)] sm:text-3xl">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-xs text-[var(--color-text-muted)]">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="flex flex-col justify-center">
          <!-- Section Header -->
          <p class="font-mono text-sm text-[var(--color-accent-primary)]">
            // About Me
          </p>

          <h2 class="heading-section mt-4">
            Turning ideas into<br />
            <span class="text-[var(--color-accent-primary)]">digital reality</span>
          </h2>

          <!-- Bio -->
          <div class="mt-6 space-y-4 text-body md:text-body-lg">
            <p>
              Expertise isn't a summit to reach; it's a horizon that recedes as you approach.
              The craft demands perpetual refinement, and I've made peace with that. As a matter of fact,
              I've come to prefer it. Based in Cebu, Philippines, I've built my career on
              the belief that the best engineers stay curious, not comfortable, constantly seeking discomfort.
            </p>
            <p>
              Currently at Arch Global Services as a Senior Software Engineer, I build
              backend systems for insurance claims orchestration with technologies like Python, Azure Functions,
              and MSSQL powering workflows that help claims specialists do their jobs better.
            </p>
            <p>
              My journey spans startup chaos to enterprise scale: from setting up Kubernetes
              clusters and CI/CD workflows at TV Startup, to building Google Maps integrations at Navagis, to developing
              serverless applications that orchestrate multiple internal and external services at Arch Global Services. Each role taught me something different
              about what good software looks like.
            </p>
            <p>
              The tech industry moves fast. Frameworks rise and fall. But curiosity?
              That stays. And as long as there's something new to learn, I'll be here ready to figure it out.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
