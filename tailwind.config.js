/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        'left-center': 'left center',
        'right-center': 'right center'
      },
      colors: {
        'primary': '#319bce',
        'secondary': '#1c2826'
      },
      keyframes: {
        fadeIn: {
          '0%': { translateY: '-20%', opacity: 0 },
          '100%': { translateY: '100%', opacity: 1 }
        },
        fadeInUp: {
          '0%': { opacity: 0, scale: '0' },
          '100%': { opacity: 1, scale: '1' }
        },
        fadeInLeft: {
          '0%': { translateX: '-20px', opacity: 0 },
          '100%': { translateX: '0', opacity: 1 }
        }
      },      
      animation: {
        'fadein': 'fadeIn 0.5s ease',
        'fadeInUp': 'fadeInUp 2s ease',
        'fadeInLeft': 'fadeInLeft 0.3s ease'
      },
    },
  },
  plugins: [],
}
