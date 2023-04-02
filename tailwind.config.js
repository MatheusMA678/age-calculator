/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        // Neutral
        nWhite: "hsl(0, 0%, 100%)",
        nOffWhite: "hsl(0, 0%, 94%)",
        nLightGrey: "hsl(0, 0%, 86%)",
        nSmokeyGrey: "hsl(0, 1%, 44%)",
        nOffBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
