---
title: "Building Modern Websites with Nuxt 4"
description: "A comprehensive look at Nuxt 4's new features and how to leverage them for building fast, modern web applications."
date: "2024-02-01"
tags: ["nuxt", "vue", "web-development", "tutorial"]
readingTime: "8 min read"
---

Nuxt 4 is here, and it brings a host of improvements that make building Vue applications even more enjoyable. Let's explore what's new and how to make the most of these features.

## What's New in Nuxt 4

Nuxt 4 introduces several exciting features:

- **Improved Performance** - Faster builds and better runtime performance
- **Enhanced TypeScript Support** - First-class TypeScript integration
- **New File-Based Routing** - More intuitive routing conventions
- **Better Developer Experience** - Improved error messages and debugging

## Setting Up a Nuxt 4 Project

Getting started is straightforward:

```bash
npx nuxi init my-project
cd my-project
npm install
npm run dev
```

## Project Structure

Nuxt 4 maintains the familiar structure with some refinements:

```
my-project/
├── app/
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── pages/
│   └── app.vue
├── content/
├── public/
├── nuxt.config.ts
└── package.json
```

## Key Features to Leverage

### 1. Auto-Imports

Nuxt automatically imports components, composables, and utilities:

```vue
<script setup>
// No need to import ref or computed!
const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
```

### 2. File-Based Routing

Create pages simply by adding files to the `pages` directory:

```
pages/
├── index.vue        → /
├── about.vue        → /about
├── blog/
│   ├── index.vue    → /blog
│   └── [slug].vue   → /blog/:slug
```

### 3. Server Routes

Create API endpoints with the `server/api` directory:

```typescript
// server/api/hello.ts
export default defineEventHandler((event) => {
  return { message: 'Hello from the API!' }
})
```

## Best Practices

Here are some tips for building with Nuxt 4:

1. **Use TypeScript** - Take advantage of Nuxt's excellent TypeScript support
2. **Leverage Composables** - Extract reusable logic into composables
3. **Optimize Images** - Use `@nuxt/image` for automatic optimization
4. **Configure SEO** - Use `useSeoMeta` for better search engine visibility

## Performance Tips

To maximize performance:

- Enable static site generation when possible
- Use lazy loading for components
- Implement proper caching strategies
- Optimize your images and assets

## Conclusion

Nuxt 4 is a fantastic framework for building modern web applications. Its developer experience, performance, and ecosystem make it an excellent choice for projects of any size.

Happy coding!
