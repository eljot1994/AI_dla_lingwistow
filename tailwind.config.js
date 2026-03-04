/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0b1220',
          950: '#060b16',
        },
      },
      boxShadow: {
        card: '0 12px 30px -16px rgba(15, 23, 42, 0.25)',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeSlideIn: 'fadeSlideIn 260ms ease-out',
      },
    },
  },
  plugins: [],
}
