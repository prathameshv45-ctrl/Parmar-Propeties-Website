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
          DEFAULT: '#D4AF37',
          dark:    '#AA8515',
          light:   'rgba(212, 175, 55, 0.12)',
        },
        navy: {
          DEFAULT: '#0E0E12',
          mid:     '#070709',
        },
        bg: '#040405',
        text: {
          DEFAULT: '#F3F3F6',
          muted:   '#8E8E9B',
        },
        border: 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        card:       '0 12px 40px rgba(0,0,0,0.6)',
        'card-lg':  '0 16px 48px rgba(212,175,55,0.08)',
        hero:       '0 20px 80px rgba(0,0,0,0.8)',
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
