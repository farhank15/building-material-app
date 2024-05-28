// tailwind.config.js atau tailwind.config.cjs
module.exports = {
  daisyui: {
    themes: ["cupcake"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        "poppins-bold": ["Poppins", "sans-serif", "bold"],
      },
      colors: {
        primary: "#65C3C8",
      },
    },
  },
  plugins: [require("daisyui")],
};
