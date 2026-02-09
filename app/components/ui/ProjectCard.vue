<script setup lang="ts">
interface Props {
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  demoUrl: '',
  repoUrl: '',
})
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:shadow-[var(--shadow-soft)]"
  >
    <!-- Image Area -->
    <div
      class="relative aspect-video overflow-hidden bg-[var(--color-bg-tertiary)]"
    >
      <!-- Placeholder or Image -->
      <div
        v-if="!image"
        class="flex h-full w-full items-center justify-center"
      >
        <UIcon
          name="i-lucide-image"
          class="h-12 w-12 text-[var(--color-text-muted)]"
        />
      </div>
      <NuxtImg
        v-else
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Hover Overlay (desktop only) -->
      <div
        class="absolute inset-0 hidden items-center justify-center gap-4 bg-[var(--color-bg-primary)]/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 md:flex"
      >
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)] transition-transform hover:scale-110"
          aria-label="View live demo"
        >
          <UIcon name="i-lucide-external-link" class="h-5 w-5" />
        </a>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-text-primary)] text-[var(--color-text-primary)] transition-transform hover:scale-110"
          aria-label="View source code"
        >
          <UIcon name="i-lucide-github" class="h-5 w-5" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3
        class="font-display text-xl font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent-primary)]"
      >
        {{ title }}
      </h3>

      <p class="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Mobile Action Links -->
      <div v-if="demoUrl || repoUrl" class="mt-6 flex gap-4 border-t border-[var(--color-border)] pt-4 md:hidden">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-primary)] transition-colors hover:text-[var(--color-text-primary)] hover:underline"
        >
          <UIcon name="i-lucide-external-link" class="h-4 w-4" />
          Live Demo
        </a>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] hover:underline"
        >
          <UIcon name="i-lucide-github" class="h-4 w-4" />
          Source
        </a>
      </div>
    </div>
  </article>
</template>
