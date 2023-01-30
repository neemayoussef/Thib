/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        lightblue: "#b8d1e9",
        blue: "#4C848C",
        purple: "#5C408D",
        darkpurple: "#311B46",
        pink: "#B9379B",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
        montserrat: ['Montserrat', "sans-serif"],
      },
      backgroundImage: {
        logomed: "url('../img/logomed.png')",
        bggrad: "url('../img/bggrad.png')",
        jelly: "url('../img/jellyss1.png')",
        tele: "url('../img/telepathib.png')",
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '0.3rem',
      },
    },
  },
  plugins: [],
};
