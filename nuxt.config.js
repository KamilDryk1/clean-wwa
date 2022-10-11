export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "clean-wwa",
    htmlAttrs: {
      lang: "pl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/util.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vue-awesome-swiper", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["vue-scrollto/nuxt", { duration: 1000, easing: "ease-in-out" }]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    extendRoutes(routes) {
      routes.forEach((route) => {
        const alias =
          route.path.length > 1 ? `${route.path}/index.html` : "/index.html";
        route.alias = alias;
      });
    },
  },
};
