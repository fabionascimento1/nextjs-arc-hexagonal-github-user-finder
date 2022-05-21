import axios from 'axios';

export const httpInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL, headers: {
    Authorization: `Bearer: ${process.env.NEXT_PUBLIC_TOKEN}`
  }
});