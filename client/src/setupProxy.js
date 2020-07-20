const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware([
        "/example-route",
      ],
      { target: "http://localhost:3001" }
    )
  );
};
