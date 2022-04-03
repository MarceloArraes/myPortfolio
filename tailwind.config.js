module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        'cover-pic': "url('/adaminterback.png')",
      },
    },
  },
  plugins: [],
}
