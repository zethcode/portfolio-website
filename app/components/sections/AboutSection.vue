<script setup lang="ts">
const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
]
</script>

<template>
  <section id="about" class="section-spacing">
    <div class="container-narrow">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Image Column -->
        <div class="relative">
          <!-- Main Image Placeholder -->
          <div
            class="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
          >
            <div class="flex h-full w-full items-center justify-center">
              <UIcon
                name="i-lucide-user"
                class="h-24 w-24 text-[var(--color-text-muted)]"
              />
            </div>

            <!-- Decorative Frame -->
            <div
              class="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[var(--color-accent-primary)] opacity-20"
            />
          </div>

          <!-- Floating Code Snippet -->
          <div
            class="absolute -bottom-6 -left-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 shadow-[var(--shadow-soft)] lg:-left-12"
          >
            <pre class="font-mono text-xs text-[var(--color-text-secondary)]"><code><span class="text-[var(--color-accent-secondary)]">const</span> <span class="text-[var(--color-accent-primary)]">developer</span> = {
  name: <span class="text-green-400">"Arckie"</span>,
  passion: <span class="text-green-400">"Building"</span>,
  coffee: <span class="text-[var(--color-accent-primary)]">true</span>
};</code></pre>
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
          <div class="mt-6 space-y-4 text-body">
            <p>
              I'm a full-stack developer based in the Philippines with a passion for
              creating beautiful, functional, and user-centered digital experiences.
              With over 5 years of experience in web development, I've had the privilege
              of working with startups, agencies, and established companies.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving.
              I believe that great software is not just about writing code—it's about
              understanding people and crafting solutions that genuinely improve their lives.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or enjoying a good cup of coffee while reading
              about the latest in tech.
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-10 grid grid-cols-3 gap-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <div class="font-display text-3xl font-bold text-[var(--color-accent-primary)]">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-xs text-[var(--color-text-muted)]">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
