/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"20px",
        screens:{
          lg:"1220px"
        }
      },
      colors:{
        pink: "#FB2E86",
        offNavyBlue:"#3F509E",
        purple: "#7E33E0",
        navyBlue: "#151875",
        offPurple: "#9F63B5",
        red: "#FB2448",
        skyBlue: "#F2F4FF",
        blue: "#2F1AC4",
        pantonePurple: "#E0D3F5",
        offBlue: "#151875",
        whiteGray:"#E7E6EF",
        whiteBlue:"#EEEFFB",
        textColor: "#8A8FB9",
        itemColor: "#F6F7FB",
        snow:"#F7F7F7",
        
      },
    },
  },
  plugins: [],
}

