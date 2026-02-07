<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

// Handle escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Prevent body scroll when menu is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] md:hidden"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl"
          @click="emit('close')"
        />

        <!-- Menu Content -->
        <div class="relative flex h-full flex-col px-6 py-8">
          <!-- Close Button -->
          <div class="flex justify-end">
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-tertiary)]"
              aria-label="Close navigation menu"
              @click="emit('close')"
            >
              <UIcon name="i-lucide-x" class="h-6 w-6" />
            </button>
          </div>

          <!-- Navigation Links -->
          <nav class="mt-8 flex flex-1 flex-col items-center justify-center gap-5 sm:mt-12 sm:gap-8">
            <template v-for="(link, index) in navLinks" :key="link.label">
              <NuxtLink
                v-if="link.href.startsWith('/')"
                :to="link.href"
                class="font-display text-2xl font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-primary)] sm:text-3xl"
                :style="{ animationDelay: `${index * 50}ms` }"
                @click="emit('close')"
              >
                {{ link.label }}
              </NuxtLink>
              <a
                v-else
                :href="link.href"
                class="font-display text-2xl font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-primary)] sm:text-3xl"
                :style="{ animationDelay: `${index * 50}ms` }"
                @click="emit('close')"
              >
                {{ link.label }}
              </a>
            </template>
          </nav>

          <!-- Social Links -->
          <div class="flex justify-center gap-6">
            <a
              href="https://github.com/zethcode"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
              aria-label="GitHub"
            >
              <UIcon name="i-lucide-github" class="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/arckie-jadulco"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
              aria-label="LinkedIn"
            >
              <UIcon name="i-lucide-linkedin" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
