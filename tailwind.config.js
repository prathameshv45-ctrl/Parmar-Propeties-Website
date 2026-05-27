/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#C8972B',
          dark:    '#A07820',
          light:   '#F5E6C0',
        },
        navy: {
          DEFAULT: '#1A1A2E',
          mid:     '#16213E',
        },
      },
      boxShadow: {
        card:       '0 2px 16px rgba(0,0,0,0.07)',
        'card-lg':  '0 8px 32px rgba(0,0,0,0.14)',
        hero:       '0 8px 40px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        card: '12px',
        btn:  '8px',
        pill: '50px',
      },
    },
  },
  plugins: [],
};
