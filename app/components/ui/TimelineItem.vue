<script setup lang="ts">
interface Props {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  isLast?: boolean
}

withDefaults(defineProps<Props>(), {
  isLast: false,
})
</script>

<template>
  <div class="relative flex gap-6">
    <!-- Timeline Line & Dot -->
    <div class="flex flex-col items-center">
      <!-- Dot -->
      <div
        class="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent-primary)] bg-[var(--color-bg-primary)]"
      >
        <div class="h-2 w-2 rounded-full bg-[var(--color-accent-primary)]" />
      </div>

      <!-- Line -->
      <div
        v-if="!isLast"
        class="w-px flex-1 bg-[var(--color-border)]"
      />
    </div>

    <!-- Content -->
    <div class="pb-12" :class="{ 'pb-0': isLast }">
      <!-- Period Badge -->
      <span
        class="inline-block rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
      >
        {{ period }}
      </span>

      <!-- Card -->
      <div
        class="mt-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:shadow-[var(--shadow-soft)]"
      >
        <h3 class="font-display text-xl font-semibold text-[var(--color-text-primary)]">
          {{ title }}
        </h3>

        <p class="mt-1 text-sm font-medium text-[var(--color-accent-primary)]">
          {{ company }}
        </p>

        <p class="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {{ description }}
        </p>

        <!-- Technologies -->
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
