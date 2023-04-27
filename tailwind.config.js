/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1787F0",
        secondary: "#1E1F29",
        success: "#00CB85",
        dark: "#191A23",
        danger: "#DD425A",
        muted: "#252733",
        light: "#C2CAD1",
        warning: "#FAB25A",
        white: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
