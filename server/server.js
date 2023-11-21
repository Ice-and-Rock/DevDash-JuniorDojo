// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/openai', createProxyMiddleware({
//   target: 'https://api.openai.com',
//   changeOrigin: true,
//   pathRewrite: {
//     // Below removes the '/openai' prefix when forwarding the request
//     '^/openai': '', 
//   },
// }));

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });

const express = require("express");
const axios = require('axios');
const cors = require("cors");
const openai = require('openai');

const openAIKey2 = process.env.REACT_APP_OPENAI_API_KEY;

const app = express();
const port = 3001;

// Set up CORS middleware
app.use(cors());
app.use(express.json());


app.post("/api", async (req, res) => {
    const params = {
        "prompt" : req.body.prompt, 
        'max_tokens': 60,
    };
    const api_url = "https://api.openai.com/v4/engines/davinci-codex/completions";
    const headers =  {
        'Authorization': openAIKey2,
        'Content-Type': 'application/json',
    }
    try {
        const response = await axios.post(api_url, params, {headers: headers});
        res.json(response.data.choices[0].text);
    } catch (error) {
        res.json({error})
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
