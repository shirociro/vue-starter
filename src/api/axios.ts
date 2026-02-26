import axios from "axios";

// Create an Axios instance
export const api = axios.create({
  baseURL: "https://express-js-starter.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 * Injects the token into every outgoing request automatically.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * RESPONSE INTERCEPTOR
 * Catches 401 errors from the backend and forces a logout/redirect.
 */
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("Unauthorized! Clearing token and redirecting...");
      
      // 1. Wipe the token
      localStorage.removeItem('accessToken');
      
      // 2. Redirect to your external login domain
      const loginUrl = "https://vue-login-wzvg.onrender.com";
      const redirectUri = encodeURIComponent(window.location.origin);
      
      // Prevent infinite redirect loops if already on the login page
      if (!window.location.href.includes("vue-login-wzvg.onrender.com")) {
        window.location.href = `${loginUrl}?redirect_uri=${redirectUri}`;
      }
    }
    return Promise.reject(err);
  }
);

export default api;