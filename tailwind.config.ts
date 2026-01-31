import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
            },
            h2: {
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: '600',
              lineHeight: '1.2',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
            },
            h3: {
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: '600',
              lineHeight: '1.2',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config
