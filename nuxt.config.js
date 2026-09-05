import { homeDescription, homeTitle } from './data/site';

export default {
  // Generate full HTML with content and metadata for every route.
  ssr: true,
  target: 'static',
  head: {
    title: homeTitle,
    htmlAttrs: { lang: 'pl' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: homeDescription },
      { name: 'format-detection', content: 'telephone=no' },
      ...(process.env.NODE_ENV === 'production'
        ? [{ 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }]
        : []),
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  css: ['@/assets/css/util.scss', '@/assets/css/content.scss'],
  plugins: ['@/plugins/reveal'],
  components: true,
  buildModules: [],
  modules: [['vue-scrollto/nuxt', { duration: 1000, easing: 'ease-in-out' }], '@nuxtjs/sitemap'],
  build: {
    // Use installed Dart Sass instead of the platform-dependent node-sass binary.
    loaders: {
      scss: { implementation: require('sass') },
      sass: { implementation: require('sass') },
    },
  },
  sitemap: { hostname: 'https://cleanwwa.pl', trailingSlash: true, exclude: ['/blog', '/blog/**', '/404', '/404/'] },
  generate: { fallback: false, exclude: [/\/index\.html$/] },
  router: {
    extendRoutes(routes) {
      routes.forEach((route) => {
        route.alias = route.path.length > 1 ? `${route.path}/index.html` : '/index.html';
      });
    },
  },
};
