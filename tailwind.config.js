/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s infinite',
        fadeLoop: 'fadeLoop 3s ease-in-out infinite',
      },
      keyframes: {
        fadeLoop: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      colors: {
        'star-yellow': '#facc15',
      },
      boxShadow: {
        'star': '0 0 6px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
