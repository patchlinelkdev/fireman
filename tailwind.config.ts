import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        'inner-shadow-input': 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
        'green-btn-shadow': '2px 2px 5px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-bg': "linear-gradient(to right, white 28rem, rgba(255, 255, 255, 0) 100%), url('/images/background.png')",
        'gradient-bg-m': "linear-gradient(to top, black 40%, rgba(255, 255, 255, 0) 100%), url('/images/bgHomePageMobile.png')",
        'gradient-bg-m-i': "linear-gradient(to bottom, black 50%, rgba(255, 255, 255, 0) 100%), url('/images/bgHomePageMobile.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
