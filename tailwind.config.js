module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary
        white: '#fff', //Dark Mode Text & Light Mode Elements

        // dark-mode
        blue: 'hsl(209, 23%, 22%)', //Dark Mode Elements
        darkBlue: 'hsl(207, 26%, 17%)', //Dark Mode Background

        // light-mode
        darkBlueLightMode: 'hsl(200, 15%, 8%)', //Light Mode Text
        gray: 'hsl(0, 0%, 52%)', //Light Mode Input
        lightGray: 'hsl(0, 0%, 98%)', //Light Mode Background
      },

      fontSize: {
        home: '14x',
        detial: '16px',
      },

      fontFamily: {
        nunito: '"Nunito Sans", "sans-serif"',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
