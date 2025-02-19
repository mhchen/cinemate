import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        periwinkle: {
          '50': '#f2f3fc',
          '100': '#e2e5f7',
          '200': '#ccd2f1',
          '300': '#a8b5e8',
          '400': '#7f90db',
          '500': '#606dd1',
          '600': '#4d53c3',
          '700': '#4141af',
          '800': '#3e3b92',
          '900': '#353474',
          '950': '#242348',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
