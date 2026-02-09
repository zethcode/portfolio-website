<script setup lang="ts">
const emit = defineEmits<{
  'toggle-menu': []
}>()

const isScrolled = ref(false)

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Blog', href: '/blog' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-lg border-b border-[var(--color-border)]'
        : 'bg-transparent'
    ]"
  >
    <div class="container-narrow">
      <nav class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-primary)]"
        >
          <NuxtImg src="/images/azj-white-transparent-v2.png" alt="Arckie Jadulco" class="w-30 mr-2 inline-block transition-opacity duration-200 hover:opacity-75 active:opacity-50" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-4 md:flex lg:gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.href"
            class="link-underline text-sm font-medium tracking-wide text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-tertiary)] md:hidden"
          aria-label="Toggle navigation menu"
          @click="emit('toggle-menu')"
        >
          <UIcon name="i-lucide-menu" class="h-6 w-6" />
        </button>
      </nav>
    </div>
  </header>
</template>
