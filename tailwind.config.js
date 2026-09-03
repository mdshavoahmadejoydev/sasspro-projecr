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
        'darkwhite': '#CFDDDB',
        'orange': '#FF7282',
        'headerbg': '#0D554C',
        'nevwhite': '#EEF4F9',
        'offwhite': '#FFFFFF',
        'olive': '#495E6C',
        'deepgreen': '#112F42',
        'deepgreena': 'rgba(17, 47, 66, 0.10)',
      },
      spacing: {
        '11': '11px',
        '17': '17px',
        '23': '23px',
        '25': '25px',
        '31': '31px',
        '35': '35px',
        '44': '44px',
        '50': '50px',
        '56': '56px',
        '75': '75px',
        '138': '138px',
        '148': '148px',
        '150': '150px',
        '150': '150px',
        '459': '459px',
        '552': '552px',
        '755': '755px',
        '537': '537px',
        '1170': '1170px',
      },
      fontSize: {
        '50':'50px',
        '52':'52px',
      },
      lineHeight: {
        '27': '27px',
        '48': '48px',
        '61': '61px',
      },
    },
  },
  plugins: [],
}
