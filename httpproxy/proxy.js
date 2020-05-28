var express = require('express');
var {createProxyMiddleware} = require('http-proxy-middleware');
var app = express();

app.use(
  '/*',
  createProxyMiddleware({ target: 'https://staking-explorer2-268108.appspot.com', changeOrigin: true })
);
app.listen(8090)
