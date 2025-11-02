/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: 'var(--color-red-500)',
        },
        indigo: {
          50: 'var(--color-indigo-50)',
          300: 'var(--color-indigo-300)',
          500: 'var(--color-indigo-500)',
          600: 'var(--color-indigo-600)',
          700: 'var(--color-indigo-700)',
        },
        purple: {
          50: 'var(--color-purple-50)',
        },
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        black: 'var(--color-black)',
        white: 'var(--color-white)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      spacing: {
        base: 'var(--spacing)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          md: 'var(--container-md)',
          xl: 'var(--container-xl)',
          '3xl': 'var(--container-3xl)',
          '4xl': 'var(--container-4xl)',
          '6xl': 'var(--container-6xl)',
        },
      },
      fontWeight: {
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        relaxed: 'var(--leading-relaxed)',
      },
      letterSpacing: {
        tighter: 'var(--tracking-tighter)',
        wider: 'var(--tracking-wider)',
      },
    },
  },
  plugins: [],
}
