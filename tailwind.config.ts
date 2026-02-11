import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        'background-secondary': '#1E293B',
        accent: '#2563EB',
        'accent-glow': '#06B6D4',
        'light-bg': '#F8FAFC',
        'text-light': '#E2E8F0'
      },
      boxShadow: {
        'accent-glow': '0 0 40px rgba(6, 182, 212, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
