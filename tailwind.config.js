/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moko-pink': '#FF8FA3',
        'moko-coral': '#FF6B8A',
        'moko-teal': '#7DD3FC',
        'soft-background': '#FDF2F8',
        'text-secondary': '#64748B',
      },
      fontSize: {
        '4xl': '2.25rem',
        '2xl': '1.5rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
      },
      spacing: {
        '4': '1rem', // 4px base spacing scale
      },
    },
  },
  plugins: [],
}