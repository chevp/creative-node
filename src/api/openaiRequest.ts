import axios from 'axios';

/**
 * Function to make requests to the OpenAI API
 * @param endpoint - The OpenAI API endpoint (e.g., "completions")
 * @param apiKey - Your OpenAI API key
 * @param payload - The JSON payload to send in the request
 */
export const makeOpenAIRequest = async (endpoint: string, apiKey: string, payload: object) => {
  
  try {
    const response = await axios.post(
      `https://api.openai.com/v1/${endpoint}`,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error with OpenAI API request:', error.message);
    } else {
      console.error('Error with OpenAI API request:', error);
    }
    throw error;
  }
};
