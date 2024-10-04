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
        "light-green-1": "#FFB3B3",
        "light-green-2": "#FF8080",
        "light-green-3": "#FF4D4D",
        "light-green-4": "#FF1A1A",
        "light-green-5": "#E60000",
      },
      backgroundImage: {
        "custom-gradient-green-right":
          "linear-gradient(to bottom right, #FFB3B3, #FF8080, #FF4D4D, #FF1A1A, #E60000 )",
        "custom-gradient-green-left":
          "linear-gradient(to top left, #FFB3B3, #FF8080, #FF4D4D, #FF1A1A, #E60000)",
      },
    },
  },
  plugins: [],
};