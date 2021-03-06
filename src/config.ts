import dotenv from 'dotenv';
dotenv.config();

export default {
  apiKey: process.env.REACT_APP_API_KEY!,
  apiUrl: process.env.REACT_APP_API_URL!
}