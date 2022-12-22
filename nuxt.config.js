export default {
  modules: ['@nuxt/http'],
  target: 'static',
  ssr: false,
  head: {
    script: [
      {
        'data-domain': 'shouldihaveanothercoffee.com',
        defer: true,
        src: 'https://plausible.io/js/script.js'
      }
    ]
  }
}
