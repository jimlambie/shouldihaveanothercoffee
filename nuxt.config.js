export default {
  modules: [
    '@nuxt/http'
  ],
  target: 'static',
  components: true,
  ssr: false,
  buildModules: [
    '@nuxt/postcss8'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  css: [
    '@/assets/css/main.css'
  ],
  head: {
    title: 'Should I Have Another Coffee?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap'
      }
    ],
    script: [
      {
        'data-domain': 'shouldihaveanothercoffee.com',
        defer: true,
        src: 'https://plausible.io/js/script.js'
      }
    ]
  }
}
