const PROXY_CONFIG = [
    {
      context:[
        "/api"
      ],
      target: "https://www.mockachino.com",
      pathRewrite : {
      "^/api" : "/9570b439-6f80-49"
      },
      changeOrigin : true,
      secure : false
    }
  ]
  module.exports = PROXY_CONFIG;