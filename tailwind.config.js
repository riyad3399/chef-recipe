/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('/image/banner.jpg')",
        background:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)) ,url('/image/backgroundImg.jpg')",
        blog: "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) ,url('/image/blogs.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
