import axios from "axios";

// Aquí Vite lee la variable del archivo .env automáticamente
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
