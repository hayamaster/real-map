/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'base-content': '#000000',
      },
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      base: '0.8125rem',
      lg: '0.875rem',
      xl: '1rem',
      '2xl': '1.125rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
}
