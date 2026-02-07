# Portfolio Website - High Priority Fixes & Polish

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix bugs, remove debug code, add missing pages, and polish the portfolio before merging `release/major-updates` into `main`.

**Architecture:** Targeted fixes across existing Vue components, new error page following Nuxt conventions, and static file additions. No new dependencies needed.

**Tech Stack:** Nuxt 4, Vue 3, TypeScript, Tailwind CSS

---

## Pre-Step: Save Plan to Project

**Step 1: Copy this plan to project docs**

```bash
cp /home/wslmach/.claude/plans/pure-bouncing-quokka.md /home/wslmach/workspace/web/portfolio-website/docs/plans/2026-02-07-high-priority-fixes.md
```

---

## Task 1: Commit Pending Changes (Resume File Relocation)

**Files:**
- Modified: `app/components/sections/ExperienceSection.vue` (line 60: href changed to `/documents/ajadulco-resume.pdf`)
- Deleted: `public/resume.pdf`
- Untracked: `public/documents/ajadulco-resume.pdf`

**Step 1: Stage changes**

```bash
git add app/components/sections/ExperienceSection.vue public/resume.pdf public/documents/
```

**Step 2: Commit**

```bash
git commit -m "chore: relocate resume PDF to /documents/ directory"
```

**Step 3: Verify**

```bash
git status
```
Expected: Clean working tree (for these files).

---

## Task 2: Remove Debug console.log

**Files:**
- Modify: `app/components/sections/ContactSection.vue:52`

**Step 1: Remove the console.log**

Find and delete this line (~line 52):
```typescript
console.log('Form submitted:', form)
```

**Step 2: Verify no other console.log remains**

```bash
grep -rn "console.log" app/
```
Expected: No results.

**Step 3: Commit**

```bash
git add app/components/sections/ContactSection.vue
git commit -m "fix: remove debug console.log from contact form"
```

---

## Task 3: Fix Social Media Links

### 3a: TheFooter.vue

**Files:**
- Modify: `app/components/TheFooter.vue:4-20`

**Step 1: Update socialLinks array**

Replace the current `socialLinks` array (lines 4-20) with:

```typescript
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/zethcode',
    icon: 'i-lucide-github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/arckie-jadulco',
    icon: 'i-lucide-linkedin',
  },
]
```

Remove Twitter entirely.

### 3b: TheMobileMenu.vue

**Files:**
- Modify: `app/components/TheMobileMenu.vue:96-124`

**Step 1: Update social links section**

Replace the social links div (lines 96-124) with:

```vue
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
```

**Step 2: Commit**

```bash
git add app/components/TheFooter.vue app/components/TheMobileMenu.vue
git commit -m "fix: update social links to real profile URLs, remove Twitter"
```

---

## Task 4: Delete Temp File

**Files:**
- Delete: `public/images/profile-cowboy-hat-1.jpg~RF50941ce.TMP`

**Step 1: Delete**

```bash
rm public/images/profile-cowboy-hat-1.jpg~RF50941ce.TMP
```

**Step 2: Commit**

```bash
git add public/images/profile-cowboy-hat-1.jpg~RF50941ce.TMP
git commit -m "chore: remove temp file from images"
```

---

## Task 5: Fix Production Workflow Filename

**Files:**
- Rename: `.github/workflows/production .yml` → `.github/workflows/production.yml`

**Step 1: Rename with git mv**

```bash
git mv ".github/workflows/production .yml" .github/workflows/production.yml
```

**Step 2: Commit**

```bash
git commit -m "fix: remove trailing space from production workflow filename"
```

---

## Task 6: Create Custom Error Page

**Files:**
- Create: `app/error.vue`

**Step 1: Create error.vue**

```vue
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
```

**Step 2: Test by visiting a non-existent page**

```bash
# Dev server should be running
# Visit http://localhost:3000/this-page-does-not-exist
```
Expected: Custom error page with "404" and "Page not found" in the portfolio's dark theme.

**Step 3: Commit**

```bash
git add app/error.vue
git commit -m "feat: add custom error page matching portfolio theme"
```

---

## Task 7: Add robots.txt

**Files:**
- Create: `public/robots.txt`

**Step 1: Create robots.txt**

```
User-agent: *
Allow: /
Disallow: /resume

Sitemap: https://arckiejadulco.com/sitemap.xml
```

**Step 2: Commit**

```bash
git add public/robots.txt
git commit -m "feat: add robots.txt for SEO"
```

---

## Task 8: Final Verification

**Step 1: Build check**

```bash
cd /home/wslmach/workspace/web/portfolio-website && npm run build
```
Expected: No errors.

**Step 2: Verify no debug code**

```bash
grep -rn "console.log" app/
```
Expected: No results.

**Step 3: Verify git log**

```bash
git log --oneline -10
```
Expected: All new commits visible on `release/major-updates`.

---

## Verification Checklist

- [ ] Pending resume changes committed
- [ ] No console.log in production code
- [ ] Footer links → github.com/zethcode, linkedin.com/in/arckie-jadulco
- [ ] Mobile menu links → same real URLs, no Twitter
- [ ] Temp file deleted from public/images/
- [ ] Production workflow filename has no space
- [ ] Custom 404 page renders at /nonexistent-path
- [ ] robots.txt accessible at /robots.txt
- [ ] `npm run build` succeeds
