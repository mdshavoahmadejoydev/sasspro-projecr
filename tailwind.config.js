/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'raleway': ["Raleway", "sans-serif"],
        'roboto': ["Roboto", "sans-serif"],
      },
      colors: {
        'primary': '#2C83BB',
        'headerbg': '#0D554C',
        'nevwhite': '#EEF4F9',
        'offwhite': '#FFFFFF',
        'olive': '#495E6C',
        'deepgreen': '#112F42',
        'deepgreena': 'rgba(17, 47, 66, 0.10)',
      },
      spacing: {
        '1170': '1170px',
      }
    },
  },
  plugins: [],
}
