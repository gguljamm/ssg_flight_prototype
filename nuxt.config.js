module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SSG - FLIGHT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
  ],
  css: ['~/assets/layout.css', '~/assets/normalize.css', 'node_modules/swiper/dist/css/swiper.css'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    scrollBehavior(to, from) {
      if (to.name !== from.name) {
        return { x: 0, y: 0 };
      }
      return {};
    },
    extendRoutes(routes, resolve) {
      let parent = routes.find(route => route.path === '/flight')
      parent.children = [];
      parent.children.push({
        name: 'index-modal',
        path: '/flight/:popup?',
        component: resolve(__dirname, 'components/popup.vue'),
      });
      parent = routes.find(route => route.path === '/result')
      parent.children = [];
      parent.children.push({
        name: 'flight-modal',
        path: '/result/:popup?',
        component: resolve(__dirname, 'components/popup.vue'),
      });
    }
  },
}

