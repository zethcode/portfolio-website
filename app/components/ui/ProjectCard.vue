<script setup lang="ts">
interface Props {
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  demoUrl: '',
  repoUrl: '',
  featured: false,
})
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:shadow-[var(--shadow-soft)]"
    :class="{ 'md:col-span-2': featured }"
  >
    <!-- Featured Badge -->
    <div
      v-if="featured"
      class="absolute right-4 top-4 z-10 rounded-full bg-[var(--color-accent-primary)] px-3 py-1 text-xs font-semibold text-[var(--color-bg-primary)]"
    >
      Featured
    </div>

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

      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 flex items-center justify-center gap-4 bg-[var(--color-bg-primary)]/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
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

      <p class="mt-2 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
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
    </div>
  </article>
</template>
