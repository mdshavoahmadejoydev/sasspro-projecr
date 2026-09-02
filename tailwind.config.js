/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ["Inter", "sans-serif"],
        'Raleway': ["Raleway", "sans-serif"],
      },
      colors: {
        'primary': '#2C83BB',
        'nevwhite': '#EEF4F9',
        'offwhite': '#FFFFFF',
      },
      spacing: {
        '1140': '1140px',
      }
    },
  },
  plugins: [],
}
