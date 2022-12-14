/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'shake 0.1s linear infinite'
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(3px)' },
          '50%': { transform: 'translateX(-3px)' },
          '75%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    },
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      fms: { paintOrder: 'fill markers stroke' },
      sfm: { paintOrder: 'stroke fill markers' },
      smf: { paintOrder: 'stroke markers fill' },
      mfs: { paintOrder: 'markers fill stroke' },
      msf: { paintOrder: 'markers stroke fill' }
    }
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')
  ]
}
