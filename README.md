# Personal Portfolio & Digital Playground

My corner of the internet built with Vue.js & Nuxt — showcasing who I am as a fullstack developer based in the Philippines. From DevOps adventures to vibe coding my way through AI exploration, this portfolio highlights my professional journey, projects that kept me up at night, and a blog where I share the lessons learned along the way.

**What's Inside:**
- About me & my tech journey
- Professional experiences & skills
- Featured projects that I'm proud of
- Blog posts on development, DevOps, and AI experiments

Built for recruiters, potential clients, and anyone curious about what happens when curiosity meets code.

## Tech Stack

Vue 3, Nuxt 4, TypeScript, Tailwind CSS 4, Nuxt UI v4, Nuxt Content v3, Cloudflare Pages

## Setup

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production (Cloudflare Pages)
npm run build

# Preview production build locally
npx wrangler pages dev dist

# Generate static site
npm run generate
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for the contact form email service |
