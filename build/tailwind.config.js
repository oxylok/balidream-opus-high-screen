/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#024756',
        accent: {
          DEFAULT: '#C2453A',
          bright: '#F05A59',
          dark: '#9E362D'
        },
        surface: {
          alt: '#F2F5FA'
        },
        gold: '#C8821E'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
        script: ['"Yellowtail"', 'cursive']
      },
      maxWidth: {
        'container-l': '80rem',
        'container-m': '52rem'
      }
    }
  }
}
