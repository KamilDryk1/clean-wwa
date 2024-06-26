export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pranie tapicerki - Clean WWA",
    htmlAttrs: {
      lang: "pl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Kompleksowe pranie tapicerki meblowej i samochodowej na terenie Warszawy i okolic. Wynajem sprzętu piorącego.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "title",
        name: "title",
        content: "Pranie tapicerki - Clean WWA",
      },
      {
        "http-equiv": "Content-Security-Policy",
        content: "upgrade-insecure-requests",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [{
      src: "https://www.googletagmanager.com/gtag/js?id=G-RZXEW35YZW",
      async: true
    },
	{
		type: 'text/javascript',
    	hid: 'fb-customer-chat',
    	body: true,
		innerHTML:`var chatbox = document.getElementById('fb-customer-chat');
			chatbox.setAttribute("page_id", "110557184063713");
			chatbox.setAttribute("attribution", "biz_inbox");
			window.fbAsyncInit = function() {
				FB.init({
				  xfbml            : true,
				  version          : 'v17.0'
				});
			  };
		
			  (function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
				fjs.parentNode.insertBefore(js, fjs);
			  }(document, 'script', 'facebook-jssdk'));`
	}
	]
  },

  __dangerouslyDisableSanitizersByTagID: { 'fb-customer-chat': ['innerHTML'] },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/util.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vue-awesome-swiper", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["vue-scrollto/nuxt", { duration: 1000, easing: "ease-in-out" }], '@nuxtjs/sitemap'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "https://qarbon.pl/sitemap.xml",
  },

  sitemap: {
	hostname: 'https://cleanwwa.pl',
  },

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
