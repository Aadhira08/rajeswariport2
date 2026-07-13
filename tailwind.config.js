/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50:  '#FEFCF9',
          100: '#FAF8F3',
          200: '#F5F0E8',
          300: '#EDE7DA',
          400: '#E2D9C8',
          500: '#D4C9B4',
        },
        sand: {
          100: '#F7F3EC',
          200: '#EDE7DB',
          300: '#DDD5C5',
          400: '#C9BDA8',
          500: '#B4A48C',
        },
        navy: {
          50:  '#EEF2F8',
          100: '#D4DEF0',
          200: '#A3B8DC',
          300: '#6B8FBF',
          400: '#3D6A9E',
          500: '#1E4D80',
          600: '#163B63',
          700: '#0F2A47',
          800: '#091D32',
          900: '#040F1B',
        },
        gold: {
          100: '#FDF4E3',
          200: '#F9E3B4',
          300: '#F0C97A',
          400: '#E3A93E',
          500: '#C8881A',
          600: '#A36710',
          700: '#7A4B08',
        },
        teal: {
          500: '#0D7377',
          600: '#0A5D61',
          700: '#074548',
        },
        warm: {
          100: '#F9F7F4',
          200: '#F0EDE6',
          300: '#E4DFD4',
          400: '#C8BFB0',
          500: '#9E9282',
          600: '#7A6E60',
          700: '#57514A',
          800: '#3A3530',
          900: '#211E1A',
        },
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(15,27,45,0.06), 0 4px 16px rgba(15,27,45,0.06)',
        'card-md': '0 4px 12px rgba(15,27,45,0.08), 0 12px 32px rgba(15,27,45,0.08)',
        'card-lg': '0 8px 24px rgba(15,27,45,0.10), 0 24px 56px rgba(15,27,45,0.10)',
        'navy':    '0 8px 24px rgba(30,77,128,0.22)',
        'gold':    '0 8px 24px rgba(200,136,26,0.22)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
