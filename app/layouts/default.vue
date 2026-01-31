<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div class="relative min-h-screen bg-[var(--color-bg-primary)]">
    <!-- Grain Texture Overlay -->
    <div class="grain-overlay" aria-hidden="true" />

    <!-- Ambient Background Glow -->
    <div
      class="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-accent-primary)] opacity-[0.03] blur-[120px]"
      />
      <div
        class="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-accent-secondary)] opacity-[0.03] blur-[100px]"
      />
    </div>

    <!-- Skip to Content Link (Accessibility) -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent-primary)] focus:px-4 focus:py-2 focus:text-[var(--color-bg-primary)]"
    >
      Skip to main content
    </a>

    <!-- Header -->
    <TheHeader @toggle-menu="toggleMobileMenu" />

    <!-- Mobile Menu -->
    <TheMobileMenu
      :is-open="isMobileMenuOpen"
      @close="closeMobileMenu"
    />

    <!-- Main Content -->
    <main id="main-content" class="relative">
      <slot />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
