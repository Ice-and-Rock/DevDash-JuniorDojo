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


app.post("/api/openai", async (req, res) => {
    const params = {
        "messages": req.body.messages, 
        'model': 'gpt-3.5-turbo-1106',
        'response_format': {'type': 'json_object'}
    };
    const api_url = "https://api.openai.com/v1/chat/completions";
    const headers =  {
        'Authorization': `Bearer ${openAIKey2}`,
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios.post(api_url, params, {headers: headers});
        res.json(response.data.choices[0].message.content);
    } catch (error) {
        console.error("Error handling OpenAI request:", error.message);
        res.status(500).json({ error: "Internal Server Error", detailedError: error.message });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
