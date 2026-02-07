# Changelog

All notable changes to the Arckie Jadulco Portfolio project will be documented in this file.

---

## [Unreleased]

### Phase 1: Design System Foundation

#### Added
- **`app/assets/css/main.css`** - Core design system with Tailwind CSS 4
  - Custom color palette (Soft Muted Dark theme)
    - `--color-bg-primary: #1a1a1f` (deep charcoal)
    - `--color-bg-secondary: #242429` (cards/sections)
    - `--color-bg-tertiary: #2d2d33` (hover states)
    - `--color-text-primary: #e8e6e3` (warm off-white)
    - `--color-text-secondary: #9d9a95` (muted gray)
    - `--color-text-muted: #6b6965` (subtle gray)
    - `--color-accent-primary: #c9a87c` (warm gold/amber)
    - `--color-accent-secondary: #8fa3a8` (soft sage/teal)
    - `--color-border: #3a3a40` (subtle borders)
  - Font families: Playfair Display, Source Sans 3, JetBrains Mono
  - Custom animations: fade-in, slide-up, float, typing, blink
  - Custom box shadows: soft, glow
  - Base layer styles (scrollbar, selection, focus states)
  - Component utilities: container-narrow, heading-display, heading-section, text-body, btn-primary, btn-secondary, card, link-underline, grain-overlay, reveal classes
  - Page transition CSS

- **`app/app.config.ts`** - Nuxt UI v4 theme configuration
  - Primary color set to amber
  - Secondary color set to slate
  - Neutral color set to stone

#### Modified
- **`nuxt.config.ts`**
  - Added CSS file to `css` array
  - Added `colorMode` config (dark mode default)
  - Added `@nuxtjs/google-fonts` module
  - Configured Google Fonts: Playfair Display, Source Sans 3, JetBrains Mono

#### Dependencies Added
- `@nuxtjs/google-fonts` - Google Fonts integration

---

### Phase 2: Layout and Navigation

#### Added
- **`app/layouts/default.vue`** - Default layout wrapper
  - Grain texture overlay (decorative)
  - Ambient background glow with radial gradients
  - Skip-to-content accessibility link
  - Header, mobile menu, and footer component integration
  - Mobile menu state management

- **`app/components/TheHeader.vue`** - Fixed header component
  - Logo/brand mark ("AJ." with accent dot)
  - Desktop navigation with 6 links (About, Skills, Projects, Experience, Blog, Contact)
  - Mobile menu toggle button (hamburger icon)
  - Scroll detection for background blur effect
  - Hover animations on nav links (underline effect)

- **`app/components/TheMobileMenu.vue`** - Full-screen mobile menu
  - Teleported to body for proper stacking
  - Backdrop blur and dark overlay
  - Close button (X icon)
  - Navigation links with staggered animation
  - Keyboard accessibility (Escape to close)
  - Body scroll lock when open
  - Social links section

- **`app/components/TheFooter.vue`** - Footer component
  - Border-top separator
  - Dynamic copyright year
  - Social links with icons (GitHub, LinkedIn, Twitter)
  - Hover color transitions

#### Modified
- **`app/app.vue`** - Wrapped NuxtPage with NuxtLayout

---

### Phase 3: Reusable UI Components

#### Added
- **`app/components/ui/SkillCard.vue`** - Skill display card
  - Props: name, icon, level (expert/advanced/intermediate)
  - 3-bar level indicator
  - Hover border and shadow effects

- **`app/components/ui/ProjectCard.vue`** - Project showcase card
  - Props: title, description, tags[], image, demoUrl, repoUrl, featured
  - Aspect-ratio image area with placeholder
  - Hover overlay with demo/repo link buttons
  - "Featured" badge for highlighted projects
  - Spans 2 columns when featured

- **`app/components/ui/TimelineItem.vue`** - Experience timeline entry
  - Props: title, company, period, description, technologies[], isLast
  - Vertical timeline with connecting line
  - Dot indicator with accent border
  - Period badge and technology tags

- **`app/components/ui/BlogCard.vue`** - Blog post preview card
  - Props: title, description, date, slug, readingTime, tags[]
  - Formatted date display
  - 2-line clamped description
  - Tags with # prefix
  - "Read article" indicator on hover

---

### Phase 4: Home Page Sections

#### Added
- **`app/components/sections/HeroSection.vue`** - Full-height hero
  - Floating background blobs with animation
  - Typing animation cycling through roles
  - CTA buttons (View My Work, Get In Touch)
  - Animated scroll indicator

- **`app/components/sections/AboutSection.vue`** - About section
  - 2-column grid (image | content)
  - Floating code snippet card
  - Bio paragraphs
  - Stats grid (Years, Projects, Clients)

- **`app/components/sections/SkillsSection.vue`** - Skills section
  - 3-column category grid (Frontend, Backend, DevOps)
  - Uses SkillCard components
  - Categorized skill listing

- **`app/components/sections/ProjectsSection.vue`** - Projects section
  - 2-column project grid
  - 6 placeholder projects (2 featured)
  - Uses ProjectCard components
  - "View More on GitHub" button

- **`app/components/sections/ExperienceSection.vue`** - Experience section
  - Sticky header with download resume button
  - Timeline layout with 4 entries
  - Uses TimelineItem components

- **`app/components/sections/ContactSection.vue`** - Contact section
  - Contact info cards (Email, Location, Availability)
  - Contact form with validation
  - Success/error states
  - Social links reminder

- **`app/pages/index.vue`** - Main portfolio page
  - Assembles all section components
  - SEO meta tags configured

#### Removed
- **`app/pages/[...slug].vue`** - Removed catch-all route

---

### Phase 5: Blog System

#### Added
- **`app/pages/blog/index.vue`** - Blog listing page
  - Back to home link
  - Page header with description
  - Posts grid using BlogCard components
  - Empty state for no posts

- **`app/pages/blog/[slug].vue`** - Blog post detail page
  - Dynamic routing by slug
  - 404 handling for missing posts
  - Post header with meta, title, description, tags
  - Prose styling for markdown content
  - SEO meta tags from post data

- **`content/blog/hello-world.md`** - Sample blog post
  - Introduction post with personal story
  - Demonstrates markdown features

- **`content/blog/building-with-nuxt-4.md`** - Technical blog post
  - Tutorial-style content
  - Code examples and best practices

#### Modified
- **`content.config.ts`** - Added blog collection
  - Schema with title, description, date, tags, readingTime, image
  - Source path set to `blog/**`

#### Removed
- **`content/index.md`** - Removed demo content
- **`content/about.md`** - Removed demo content
- **`app/components/Alert.vue`** - Removed demo component
- **`app/components/Counter.vue`** - Removed demo component

---

### Phase 6: Polish and Optimization

#### Added
- **`app/plugins/scroll-reveal.client.ts`** - Scroll reveal animations
  - IntersectionObserver-based reveal
  - Adds `.is-visible` class on scroll
  - Re-observes on route changes

- **`public/resume.pdf`** - Placeholder resume file

#### Modified
- **`nuxt.config.ts`**
  - Added page transitions (`name: 'page'`, `mode: 'out-in'`)
  - Added SEO meta tags (title, description, theme-color)
  - Added Open Graph meta tags
  - Added Twitter card meta tags
  - Set HTML lang attribute to 'en'
  - Added favicon link

---

### Phase 7: Tailwind CSS 4 Preflight Fix

Tailwind CSS 4 uses native CSS cascade layers. The `@layer components` block has lower cascade priority than the utilities layer, so preflight resets (`color: inherit`, `padding: 0`, `border: none`, `font-size: inherit`, `font-weight: inherit`) were overriding custom component classes on `<a>`, `<button>`, and heading elements. Migrating to `@utility` blocks (highest priority layer) resolves these specificity conflicts.

#### Modified
- **`app/assets/css/main.css`** - Migrated component classes to `@utility` blocks
  - **Typography** (moved to `@utility`):
    - `heading-display` — display heading with Playfair Display, clamp sizing
    - `heading-section` — section heading with Playfair Display
    - `text-body` — body text with Source Sans 3
    - `text-body-lg` — large body text variant
  - **Buttons** (moved to `@utility` with nested `&:hover`):
    - `btn-primary` — accent background, hover glow + lift
    - `btn-secondary` — bordered, hover accent color + lift
  - **Links** (moved to `@utility` with nested `&::after` and `&:hover`):
    - `link-underline` — animated underline on hover
  - **Overlay** (moved to `@utility`):
    - `grain-overlay` — fixed noise texture overlay
  - **Layout** (moved to `@utility` with responsive CSS custom properties):
    - `container-narrow` — max-width container with responsive padding via `--container-padding` (1rem → 1.5rem at 640px)
    - `section-spacing` — vertical padding via `--section-pt` / `--section-pb` (4rem → 6rem at 640px → 8rem at 768px)
  - Added `:root` responsive custom properties block for breakpoint-dependent values used by `@utility` blocks (since `@utility` cannot contain `@media` queries directly)

#### Removed
- `.card` class — unused in any Vue template (components use inline Tailwind utilities instead)

#### Kept in `@layer components`
- `[id] { scroll-margin-top }` — attribute selector, no preflight conflict
- `.reveal` / `.reveal.is-visible` / `.reveal-delay-*` — compound selectors driven by JS IntersectionObserver, applied to `<div>` elements with no preflight conflict

---

### Phase 8: High Priority Fixes & Polish

#### Fixed
- **`app/components/sections/ContactSection.vue`** - Removed debug `console.log('Form submitted:', form)` from contact form handler
- **`app/components/TheFooter.vue`** - Updated social links to real profile URLs (`github.com/zethcode`, `linkedin.com/in/arckie-jadulco`), removed Twitter link
- **`app/components/TheMobileMenu.vue`** - Updated social links to real profile URLs, removed Twitter link
- **`.github/workflows/production.yml`** - Removed trailing space from filename (`production .yml` → `production.yml`)

#### Added
- **`app/error.vue`** - Custom error page matching portfolio theme
  - Displays status code (404/500) with themed styling
  - "Page not found" / "Something went wrong" messages
  - "Back to Home" button using `clearError({ redirect: '/' })`
- **`public/robots.txt`** - SEO robots file
  - Allows all crawlers, disallows `/resume`
  - Sitemap reference to `arckiejadulco.com/sitemap.xml`

#### Changed
- **`app/components/sections/ExperienceSection.vue`** - Resume download link updated from `/resume.pdf` to `/documents/ajadulco-resume.pdf`
- **`public/documents/ajadulco-resume.pdf`** - Resume relocated from `public/resume.pdf` to `public/documents/`

#### Removed
- **`public/resume.pdf`** - Moved to `public/documents/ajadulco-resume.pdf`
- **`public/images/profile-cowboy-hat-1.jpg~RF50941ce.TMP`** - Deleted temp file

---

## Notes for Reviewer

### Suggested Commit Messages (in order)

**Phase 1:**
```
feat: configure design system with Tailwind CSS 4 and custom tokens

- Add custom color palette (Soft Muted Dark theme)
- Configure typography with Google Fonts
- Add custom animations and component utilities
- Set dark mode as default
```

**Phase 2:**
```
feat: add base layout with header, footer, and mobile navigation

- Create default layout with grain overlay and ambient glow
- Add fixed header with scroll blur effect
- Add full-screen mobile menu with keyboard support
- Add footer with social links
```

**Phase 3:**
```
feat: add reusable UI components

- Add SkillCard with level indicator
- Add ProjectCard with hover overlay and featured badge
- Add TimelineItem for experience section
- Add BlogCard with formatted date and tags
```

**Phase 4:**
```
feat: add home page sections and main index page

- Add HeroSection with typing animation and CTAs
- Add AboutSection with stats and floating code snippet
- Add SkillsSection with categorized skill grid
- Add ProjectsSection with featured projects
- Add ExperienceSection with timeline layout
- Add ContactSection with form validation
- Create index.vue assembling all sections
```

**Phase 5:**
```
feat: add blog system with Nuxt Content v3

- Configure blog collection with schema in content.config.ts
- Add blog index page with posts grid
- Add blog post detail page with prose styling
- Create sample blog posts (hello-world, building-with-nuxt-4)
- Remove demo content and components
```
