const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/openai', createProxyMiddleware({
  target: 'https://api.openai.com',
  changeOrigin: true,
  pathRewrite: {
    // Below removes the '/openai' prefix when forwarding the request
    '^/openai': '', 
  },
}));

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
