/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          white: "var(--color-text-white)",
          blue: "var(--color-text-blue)",
          gray: "var(--color-text-gray)",
          black: "var(--color-text-black)"
        }
      },
      backgroundColor: {
        skin: {
          main: "var(--background-main)",
          footer: "var(--background-footer)",
          footer1: "var(--background-footer1)",
          blue: "var(--background-blue)",
          semi: "var(--background-semi-blue)",
        }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      ".scrollbar-thin": {
        scrollbarWidth: "20px",
        scrollColor: "var(--color-text-gray)",
        scrollbarHeight: "20px",
      },

      ".scrollbar-webkit": {
        "&::-webkit-scrollbar": {
          width: "11px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "var(--color-text-gray)",
          borderRadius: "20px",
          height: "10px",
          border: "1px solid white",
          marginLeft: "30px",
          scrollbarHeight: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "white",
          marginLeft: "50px",
          height: "10px"
        },
      },
    }
    addUtilities(newUtilities, "responsive", "hover")
  }
  ],
}
