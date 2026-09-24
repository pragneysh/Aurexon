/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'var(--brand-navy)',
          'navy-dark': 'var(--brand-navy-dark)',
          green: 'var(--brand-green)',
          lime: 'var(--brand-lime)',
          'dark-green': 'var(--brand-dark-green)',
        },
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(17, 22, 46, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
