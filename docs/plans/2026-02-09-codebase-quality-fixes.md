# Codebase Quality Fixes — Audit Findings

## Context
After completing the text truncation and content improvement pass, a full codebase audit identified 13 issues across 9 files: bugs (image overlap), grammar/typos, inconsistencies, dead code, and missing UX attributes. This plan addresses all of them. Design differentiation (template-likeness) is tracked separately in `plans/frontend-design/`.

## Files to modify (9 total)

### 1. `app/components/sections/AboutSection.vue` — 3 fixes

**A. Image overlap bug (lines 19-29)**
Remove the UIcon placeholder and flex wrapper. NuxtImg sits directly in the aspect-square container:
```
REMOVE lines 19-29 (the flex div with UIcon + NuxtImg)
REPLACE WITH:
<NuxtImg
  src="/images/profile-cowboy-hat-1.jpg"
  alt="Arckie Jadulco"
  class="h-full w-full object-cover rounded-2xl"
/>
```

**B. Comma splice (line 71)**
- Current: `I am based in Cebu, Philippines, I've built my career on`
- Fix: `Based in Cebu, Philippines, I've built my career on`

**C. Alt text** — already handled in fix A ("Arckie Jadulco")

---

### 2. `app/components/sections/HeroSection.vue` — 2 fixes

**A. Grammar (line 97)**
- `expertise on building` → `expertise in building`

**B. Redundant class binding (lines 88-91)**
- Remove `:class="{ 'h-6': true }"` from the cursor span
- Add `h-6` to the static `class` string

---

### 3. `app/pages/resume.vue` — 1 fix

**Line 44:** `6+ years` → `7+ years` (match AboutSection stat)

---

### 4. `app/components/TheFooter.vue` — 1 fix

**Line 12:** Add trailing slash to LinkedIn URL
- `https://www.linkedin.com/in/arckie-jadulco` → `https://www.linkedin.com/in/arckie-jadulco/`

---

### 5. `app/components/sections/ContactSection.vue` — 2 fixes

**A. Autocomplete attributes**
- Name input (line ~168): add `autocomplete="name"`
- Email input (line ~186): add `autocomplete="email"`

**B. LinkedIn URL** — already correct (has trailing slash), no change needed

---

### 6. `app/assets/css/main.css` — 1 fix

**Section padding progressive increase (lines 144-157)**
- sm (640px): `6rem` → `5rem`
- md (768px): `4rem` → `6rem`
- Result: base 4rem → sm 5rem → md 6rem

---

### 7. `app/components/TheHeader.vue` — 1 fix

**Line 46:** `alt="Logo"` → `alt="Arckie Jadulco"`

---

### 8. `app/components/ui/ProjectCard.vue` — 1 fix (dead code removal)

Remove unused `featured` prop and all associated code:
- Remove `featured?: boolean` from Props interface
- Remove `featured: false` from withDefaults
- Remove `:class="{ 'md:col-span-2': featured }"` from article tag
- Remove the Featured Badge `<div v-if="featured">` block (lines 26-31)

---

### 9. `app/components/sections/ProjectsSection.vue` — 1 fix

**Developer Portfolio project:** `demoUrl: ''` → `demoUrl: 'https://arckiejadulco.dev'`

---

## Verification
1. `npx nuxi dev` — site builds without errors
2. Homepage: profile image displays correctly (no icon overlap, fills container)
3. Homepage: HeroSection tagline reads "expertise in building"
4. Homepage: section spacing increases progressively (resize browser sm→md→lg)
5. `/resume`: summary says "7+ years"
6. All LinkedIn links have trailing slash (footer, contact, nuxt.config)
7. Contact form: browser autocomplete suggests name/email
8. ProjectCard: no featured badge or col-span behavior
9. Developer Portfolio card: "Live Demo" link goes to arckiejadulco.dev

## Status: COMPLETED (2026-02-09)
All 13 fixes implemented and verified — build passes successfully.
