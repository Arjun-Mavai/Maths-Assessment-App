/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#1C4980',
        blue1:'#0073E6',
        gray1:'#DADCE0',
      },
    },
  },
  plugins: [],
}

