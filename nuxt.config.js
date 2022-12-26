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
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap'
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
