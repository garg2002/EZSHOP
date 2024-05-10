const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ezshop-v56r.onrender.com/',
      changeOrigin: true,
    })
  );
};