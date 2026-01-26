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
