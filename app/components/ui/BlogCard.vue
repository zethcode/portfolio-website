<script setup lang="ts">
interface Props {
  title: string
  description: string
  date: string
  slug: string
  readingTime?: string
  tags?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  readingTime: '',
  tags: () => [],
})

const formattedDate = computed(() => {
  const date = new Date(props.date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

<template>
  <article
    class="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:shadow-[var(--shadow-soft)]"
  >
    <NuxtLink :to="`/blog/${slug}`" class="block">
      <!-- Meta -->
      <div class="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
        <time :datetime="date">{{ formattedDate }}</time>
        <span v-if="readingTime" class="flex items-center gap-1">
          <span class="h-1 w-1 rounded-full bg-[var(--color-text-muted)]" />
          {{ readingTime }}
        </span>
      </div>

      <!-- Title -->
      <h3
        class="mt-3 font-display text-xl font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent-primary)]"
      >
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {{ description }}
      </p>

      <!-- Tags -->
      <div v-if="tags.length" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs text-[var(--color-text-muted)]"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Read More Indicator -->
      <div
        class="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--color-accent-primary)] opacity-0 transition-opacity group-hover:opacity-100"
      >
        <span>Read article</span>
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
      </div>
    </NuxtLink>
  </article>
</template>
