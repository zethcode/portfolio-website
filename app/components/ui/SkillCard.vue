<script setup lang="ts">
interface Props {
  name: string
  icon?: string
  level?: 'expert' | 'advanced' | 'intermediate'
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'i-lucide-code',
  level: 'intermediate',
})

const levelBars = computed(() => {
  switch (props.level) {
    case 'expert':
      return 3
    case 'advanced':
      return 2
    case 'intermediate':
    default:
      return 1
  }
})
</script>

<template>
  <div
    class="group flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:shadow-[var(--shadow-soft)]"
  >
    <!-- Icon -->
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-accent-primary)]"
    >
      <UIcon :name="icon" class="h-5 w-5" />
    </div>

    <!-- Content -->
    <div class="flex flex-1 items-center justify-between">
      <span class="text-sm font-medium text-[var(--color-text-primary)]">
        {{ name }}
      </span>

      <!-- Level Indicator -->
      <div class="flex gap-1">
        <div
          v-for="i in 3"
          :key="i"
          class="h-1.5 w-4 rounded-full transition-colors"
          :class="[
            i <= levelBars
              ? 'bg-[var(--color-accent-primary)]'
              : 'bg-[var(--color-bg-tertiary)]'
          ]"
        />
      </div>
    </div>
  </div>
</template>
