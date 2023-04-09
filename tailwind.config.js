/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '280px',
      // => @media (min-width: 640px) { ... }
      'sm': '501px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        dark: "#282A37",
      },
      backgroundImage: {
        halfdark: "linear-gradient(to right,rgba(40, 42 ,55,.7),rgba(40, 42 ,55,.7))",
      }
    },
  },
  plugins: [],
}

