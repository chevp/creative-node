import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    DEFAULT_ENDPOINT: 'completions',
};