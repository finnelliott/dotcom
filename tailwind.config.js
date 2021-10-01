const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Organetto']
      },
      colors: {
        rose: colors.rose,
        viceRose50: 'rgba(251, 113, 133, 0.5)',
        viceBlue50: 'rgba(191, 219, 254, 0.5)',
        viceWhite50: 'rgba(255, 255, 255, 0.5)'
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontWeight: '500'
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
