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
        awa: {
          100: '#878CE9',
          300: '#5D6F8C',
          400: '#4E5E83',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
