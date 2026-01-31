<script setup lang="ts">
useSeoMeta({
  title: 'Blog | Arckie Jadulco',
  description: 'Thoughts, tutorials, and insights on web development, technology, and software engineering.',
  ogTitle: 'Blog | Arckie Jadulco',
  ogDescription: 'Thoughts, tutorials, and insights on web development, technology, and software engineering.',
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div class="section-spacing">
    <div class="container-narrow">
      <!-- Back Link -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
      >
        <UIcon name="i-lucide-arrow-left" class="h-4 w-4" />
        Back to home
      </NuxtLink>

      <!-- Page Header -->
      <div class="mt-8">
        <p class="font-mono text-sm text-[var(--color-accent-primary)]">
          // Blog
        </p>
        <h1 class="heading-display mt-4">
          Thoughts & Writings
        </h1>
        <p class="mt-4 max-w-2xl text-body md:text-body-lg">
          Sharing my experiences, learnings, and insights about web development,
          technology, and the craft of building software.
        </p>
      </div>

      <!-- Posts Grid -->
      <div v-if="posts?.length" class="mt-12 grid gap-6 md:grid-cols-2">
        <UiBlogCard
          v-for="post in posts"
          :key="post.stem"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :slug="post.stem?.replace('blog/', '') || ''"
          :reading-time="post.readingTime"
          :tags="post.tags"
        />
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-12 text-center"
      >
        <UIcon
          name="i-lucide-file-text"
          class="mx-auto h-12 w-12 text-[var(--color-text-muted)]"
        />
        <p class="mt-4 text-[var(--color-text-secondary)]">
          No posts yet. Check back soon!
        </p>
      </div>
    </div>
  </div>
</template>
