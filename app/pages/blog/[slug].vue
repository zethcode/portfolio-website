<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  const date = new Date(post.value.date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

useSeoMeta({
  title: () => `${post.value?.title} | Arckie Jadulco`,
  description: () => post.value?.description,
  ogTitle: () => `${post.value?.title} | Arckie Jadulco`,
  ogDescription: () => post.value?.description,
  ogImage: () => post.value?.image || '/og-image.png',
})
</script>

<template>
  <article class="section-spacing">
    <div class="container-narrow">
      <!-- Back Link -->
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
      >
        <UIcon name="i-lucide-arrow-left" class="h-4 w-4" />
        Back to blog
      </NuxtLink>

      <!-- Post Header -->
      <header class="mt-8">
        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)]">
          <time :datetime="post?.date">{{ formattedDate }}</time>
          <span v-if="post?.readingTime" class="flex items-center gap-2">
            <span class="h-1 w-1 rounded-full bg-[var(--color-text-muted)]" />
            {{ post.readingTime }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="heading-display mt-4">
          {{ post?.title }}
        </h1>

        <!-- Description -->
        <p class="mt-4 text-xl text-[var(--color-text-secondary)]">
          {{ post?.description }}
        </p>

        <!-- Tags -->
        <div v-if="post?.tags?.length" class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full bg-[var(--color-bg-secondary)] px-3 py-1 text-sm text-[var(--color-text-secondary)]"
          >
            #{{ tag }}
          </span>
        </div>
      </header>

      <!-- Post Content -->
      <div class="prose-custom mt-8 sm:mt-12">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </div>
  </article>
</template>

<style>
@reference "tailwindcss";

/* Prose Styling for Blog Content */
.prose-custom {
  @apply max-w-3xl;
}

.prose-custom h2 {
  font-family: var(--font-display);
  @apply text-2xl font-semibold text-[var(--color-text-primary)] mt-12 mb-4;
}

.prose-custom h3 {
  font-family: var(--font-display);
  @apply text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-3;
}

.prose-custom p {
  @apply text-[var(--color-text-secondary)] leading-relaxed mb-6;
}

.prose-custom a {
  @apply text-[var(--color-accent-primary)] underline underline-offset-2 hover:text-[var(--color-accent-primary)]/80;
}

.prose-custom ul,
.prose-custom ol {
  @apply text-[var(--color-text-secondary)] mb-6 pl-6;
}

.prose-custom ul {
  @apply list-disc;
}

.prose-custom ol {
  @apply list-decimal;
}

.prose-custom li {
  @apply mb-2;
}

.prose-custom blockquote {
  @apply border-l-4 border-[var(--color-accent-primary)] bg-[var(--color-bg-secondary)] pl-6 py-4 pr-4 my-6 italic text-[var(--color-text-secondary)];
}

.prose-custom code {
  font-family: var(--font-mono);
  @apply text-sm bg-[var(--color-bg-secondary)] px-1.5 py-0.5 rounded text-[var(--color-accent-primary)];
}

.prose-custom pre {
  @apply bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-3 sm:p-4 overflow-x-auto my-6 text-sm;
  -webkit-overflow-scrolling: touch;
}

.prose-custom pre code {
  @apply bg-transparent p-0 text-[var(--color-text-primary)];
}

.prose-custom img {
  @apply rounded-lg my-8 max-w-full h-auto;
}

.prose-custom hr {
  @apply border-[var(--color-border)] my-12;
}

.prose-custom strong {
  @apply font-semibold text-[var(--color-text-primary)];
}
</style>
