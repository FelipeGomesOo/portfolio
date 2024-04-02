/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    colors: {
      primary: {
        light: "#717c82",
        DEFAULT: "#53565a",
        dark: "#36363d",
      },
      blue: "#00c1da",
      green: "#00aa13",
      yellow: "#f6be00",
      pink: "#ce0058",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      screens: {
        "3xl": "1792px",
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(40%)",
          },
        },
        reveal: {
          from: {
            transform: "translateY(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        emerge: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        "fade-in": {
          from: {
            transform: "translateY(50%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down linear forwards",
        reveal: "reveal  2s forwards cubic-bezier(0.165, 0.84, 0.44, 1)",
        emerge: "emerge 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1)",
        "fade-in": "fade-in forwards ease-in-out",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    },
  },
  plugins: [],
};
