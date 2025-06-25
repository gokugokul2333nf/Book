import axios from 'axios';

const API = axios.create({
  // baseURL: 'https://hr-flow-ykzm.onrender.com/api',
  baseURL: 'https://book-14jh.onrender.com/api', // Change this based on environment
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Use backticks here
  }
  return config;
});

export default API;
