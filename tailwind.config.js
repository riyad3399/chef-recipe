/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))",
        background:
          "linear-gradient(to right bottom, rgba(1, 0, 0, 0.1),rgba(0, 0, 0, 0.1)) ,url('/image/backgroundImg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
