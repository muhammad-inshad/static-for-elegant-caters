/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          gold: '#D4AF37',
          black: '#1A1A1A',
          charcoal: '#333333',
          cream: '#FFFDD0',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'scrollX': 'scrollX 15s linear infinite',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1rem))' },
        }
      }
    },
  },
  plugins: [],
}
