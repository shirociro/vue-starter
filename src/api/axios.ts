import axios from "axios";

// Create an Axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: add interceptors

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     return Promise.reject(error);
//   }
// );
