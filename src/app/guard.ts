import api from '@/api/axios';
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export async function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const urlParams = new URLSearchParams(window.location.search);
  const tokenFromUrl = urlParams.get('token');

  // 1. If token is in URL, prioritize it and save it
  if (tokenFromUrl) {
    localStorage.setItem('accessToken', tokenFromUrl);
  }

  const token = localStorage.getItem('accessToken');

  // 2. No token? Redirect to external login
  if (!token) {
    return redirectToLogin();
  }

  try {
    // 3. Verify token with backend
    await api.get('/tasks', { timeout: 5000 });

    // 4. CLEAN URL: If we have a token in the URL, remove it
    if (to.query.token) {
      // We use next() with an object to "redirect" to the same page 
      // but WITHOUT the query parameters. This cleans the history.
      return next({
        path: to.path,
        query: {},      // Removes ?token=...
        replace: true   // Prevents the "token" URL from staying in browser history
      });
    }

    next(); // Validated and URL is already clean (or was clean to start with)
  } catch (err) {
    console.error("Auth Guard Error:", err);
    localStorage.removeItem('accessToken');
    redirectToLogin();
  }
}

function redirectToLogin() {
  const redirectUri = encodeURIComponent(window.location.origin);
  window.location.href = `https://vue-login-wzvg.onrender.com?redirect_uri=${redirectUri}`;
}