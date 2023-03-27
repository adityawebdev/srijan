module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        green: "#126656",
        peach: "#f8f4e8",
        orange: "#cf8e55",
        black: "#000000",
        indigo: "#5e0fff",
        blue: "#1905d9",
        lightpink: "#fe86ff",
        babypink: "fd2bff",
        deeppink: "#c202d3",
        maroon: "#780904",
        darkMaroon: "#400604",
        extraDarkMaroon: "#300503",
        brightRed: "d61c00e",
        gold: "#ce9530",
        whitish: "#ebe0c5",
      },
    },
  },
  plugins: [],
};
