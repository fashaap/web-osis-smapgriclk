/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{ 
        landingpageBg2: "url('/public/gedung-smapgriclk.png')",
        vector2: "url('/public/Vector 2.png')",
        vector3: "url('/public/Untitled design (5).png')",
      }
    },
  },
  plugins: [],
}