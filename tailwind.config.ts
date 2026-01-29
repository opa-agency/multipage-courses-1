import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: 'calc(1 / 0.75)' }], // 12px / 16px
        sm: ['0.875rem', { lineHeight: 'calc(1.25 / 0.875)' }], // 14px / 20px
        base: ['1rem', { lineHeight: 'calc(1.5 / 1)' }], // 16px / 24px
        lg: ['1.125rem', { lineHeight: 'calc(1.75 / 1.125)' }], // 18px / 28px
        xl: ['1.25rem', { lineHeight: 'calc(1.75 / 1.25)' }], // 20px / 28px
        '2xl': ['1.5rem', { lineHeight: 'calc(2 / 1.5)' }], // 24px / 32px
        '3xl': ['2rem', { lineHeight: 'calc(2.5 / 2)' }], // 32px / 40px
        '4xl': ['2.5rem', { lineHeight: '1' }], // 40px / 48px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px / 48px
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px / 60px
        '7xl': ['4.5rem', { lineHeight: '1' }], // 72px / 72px
        '8xl': ['6rem', { lineHeight: '1' }], // 96px / 96px
        '9xl': ['8rem', { lineHeight: '1' }], // 128px / 128px
      },
      animation: {
        'caret-blink': 'caret-blink 1.1s infinite',
      },
      keyframes: {
        'caret-blink': {
          '0%': { visibility: 'visible' },
          '50%, 100%': { visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
