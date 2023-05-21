/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0F172A',
        secondary: '#28364E',
      },
      borderColor: {
        primary: '#878CE9',
      },
      colors: {
        primary: '#878CE9',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
}
