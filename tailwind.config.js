/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter'],
        mulish: ['mulish'],
        nunitoSans: ['nunito']
      },
      backgroundImage: {
        'landing_bg' : "url('../assets/images/bg-login.png')",
      }
    },
  },
  plugins: [],
}
