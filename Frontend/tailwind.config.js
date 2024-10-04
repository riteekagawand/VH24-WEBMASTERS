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
        "light-green-1": "#D3EE98",
        "light-green-2": "#A0D683",
        "light-green-3": "#72BF78",
        "light-green-4": "#54C392",
        "light-green-5": "#15B392",
      },
      backgroundImage: {
        "custom-gradient-green-right":
          "linear-gradient(to bottom right, #D3EE98, #A0D683, #72BF78,  #15B392)",
        "custom-gradient-green-left":
          "linear-gradient(to top left, #D3EE98, #A0D683, #72BF78,  #15B392)",
      },
    },
  },
  plugins: [],
};