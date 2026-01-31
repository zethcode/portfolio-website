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
            <div class="flex h-full w-full justify-center items-start">
              <UIcon
                name="i-lucide-user"
                class="h-24 w-24 text-[var(--color-text-muted)]"
              />
              <img
                src="/assets/images/profile-cowboy-hat-1.jpg"
                alt="Profile Picture"
                class="rounded"
              >
            </div>

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

          <!-- Floating Code Snippet -->
          <!-- <div
            class="absolute top-95 left-0 hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 shadow-[var(--shadow-soft)] sm:block sm:-left-6 lg:-left-12"
          >
            <pre class="font-mono text-xs text-[var(--color-text-secondary)]"><code><span class="text-[var(--color-accent-secondary)]">const</span> <span class="text-[var(--color-accent-primary)]">arckie</span> = {
  role: <span class="text-green-400">"Software Engineer"</span>,
  focus: <span class="text-green-400">"Full Stack"</span>,
  learning: <span class="text-[var(--color-accent-primary)]">true</span>
};</code></pre>
          </div> -->
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
              I've come to prefer it. I am based in Cebu, Philippines, I've built my career on
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
              serverless applications that orchestrate multiple internal and external at Arch Global Services. Each role taught me something different
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
