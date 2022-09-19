/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        third: "#d1b3087b",
        h:'#ccae03',
      },
      screens: {
        fd: "300px",

				sm: "450px",
		
				md: "768px",
		
				lg: "1350px",
			  },

        fontFamily: {
          default: ["Satoshi", "sans-serif"],
          custom: ["Chillax", "sans-serif"]
        },
        backgroundImage: {
          'bimg': "url('/src/img/space.jpg')",
        }
    },
  },
  plugins: [],
}