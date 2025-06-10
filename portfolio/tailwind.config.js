/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage:{
        'home_bg':"URL('/Assets/photo_2025-05-13_17-45-40.jpg')",
        'big-head-car':"url('/Assets/Background.jpg')",
        'code':"url('/Assets/code.jpeg')",
        'coode':"url('/Assets/cooode.jpg')",
        'codeee':"URL('/Assets/codeeeee.jpg')",
        'about':"URL('/Assets/about.png')",
        'contact':"URL('/Assets/Contact.jpg')",
        'box':"URL('/Assets/Box.jpg')"
      },
      boxShadow: {
        'text': '2px 2px 4px rgba(0,0,0,0.8)', // text-shadow effect
      },
      backgroundColor:{
        'dark':'rgba(0,0,0.9)'
      },
      transform: {
        'screen-tilt': 'perspective(1000px) rotateX(10deg) rotateY(-15deg)'
      },
      screens: {
        lg:'1400px',
        smd:'500px',
        md2:'840px',
        md3:'942px',
        md4:'1030px',
        lg2:'1700px',
      },
      animation: {
        slide360: "slide360 20s linear infinite",
      },
      keyframes: {
        slide360: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}