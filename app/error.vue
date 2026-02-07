<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error.statusCode || 500)
const message = computed(() => {
  if (statusCode.value === 404) return 'Page not found'
  return 'Something went wrong'
})

const handleGoHome = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg-primary)] px-6 text-center">
    <p class="font-mono text-sm text-[var(--color-accent-primary)]">
      // Error
    </p>
    <h1 class="mt-4 font-display text-7xl font-bold text-[var(--color-text-primary)] md:text-9xl">
      {{ statusCode }}
    </h1>
    <p class="mt-4 text-lg text-[var(--color-text-secondary)]">
      {{ message }}
    </p>
    <button
      class="btn-primary mt-8 inline-flex items-center gap-2"
      @click="handleGoHome"
    >
      <UIcon name="i-lucide-arrow-left" class="h-5 w-5" />
      Back to Home
    </button>
  </div>
</template>
