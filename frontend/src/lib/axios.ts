import axios from "axios";

/**
 * Konfigurasi Global Axios
 * 
 * Melakukan pemusatan konfigurasi API agar mudah dikelola.
 * Keuntungan:
 * 1. Base URL terpusat (Backend Laravel).
 * 2. Mendukung Cookie (withCredentials) untuk Laravel Sanctum.
 * 3. Interceptor otomatis untuk menyuntikkan Token Bearer.
 */
const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Interceptor: Otomatis tambahkan Token ke Header Authorization jika ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("gymhub_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
