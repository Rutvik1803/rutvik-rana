/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        protest: ["Protest", "sans-serif"], // Use Protest font
        poppins: ["Poppins", "sans-serif"], // Use Poppins font
        canela: ["Canela", "serif"], // Use Canela font
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
