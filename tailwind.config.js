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
        'nevwhite': '#EEF4F9',
        'btnwhite': '#FFFFFF',
        'primary': '#2C83BB',
      },
    },
  },
  plugins: [],
}
