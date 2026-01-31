<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'i-lucide-github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'i-lucide-linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: 'i-lucide-twitter',
  },
]
</script>

<template>
  <footer class="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
    <div class="container-narrow">
      <div class="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <!-- Copyright -->
        <p class="text-sm text-[var(--color-text-muted)]">
          &copy; {{ currentYear }} Arckie Jadulco. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-accent-primary)]"
            :aria-label="link.label"
          >
            <UIcon :name="link.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
