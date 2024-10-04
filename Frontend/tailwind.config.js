/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        loopLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        loopRight: {
          "0%": { transform: "translateX(-100%)" }, // Start from 100% (off-screen right)
          "100%": { transform: "translateX(0)" }, // Move to 0 (fully in view from right)
        },
      },
      animation: {
        loopLeft: "loopLeft 20s linear infinite",
        loopRight: "loopRight 20s linear infinite",
      },
      colors: {
        "light-green-1": "#FFAAAA",
        "light-green-2": "#FF7777",
        "light-green-3": "#FF8A8A",
        "light-green-4": "#D91656",
        "light-green-5": "#C7253E",
      },
      backgroundImage: {
        "custom-gradient-green-right":
          "linear-gradient(to bottom right, #FFAAAA, #FF7777, #FF8A8A,  #D91656)",
        "custom-gradient-green-left":
          "linear-gradient(to top left, #FFAAAA, #FF7777, #FF8A8A,  #D91656)",
      },
    },
  },
  plugins: [],
};