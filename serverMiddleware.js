const proxyMiddleware = require('http-proxy-middleware')

module.exports = function (app) {
  // Set up the proxy middleware
  app.use(
    '/api', // proxy all api requests
    proxyMiddleware({
      target: 'https://maps.googleapis.com', // proxy to Google's API server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove the /api prefix from the path
      },
    })
  )
}