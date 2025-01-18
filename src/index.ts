import express from 'express';
import { makeOpenAIRequest } from './api/openaiRequest';
import { CONFIG } from './utils/config';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to handle OpenAI API requests
app.post('/prompt', async (req, res) => {
  const { endpoint = CONFIG.DEFAULT_ENDPOINT, payload } = req.body;

  if (!payload) {
    return res.status(400).json({ error: 'Payload is required' });
  }

  try {
    const response = await makeOpenAIRequest(endpoint, CONFIG.OPENAI_API_KEY, payload);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process the request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
