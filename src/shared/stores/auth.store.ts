import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('accessToken') || null,
  }),
  getters: {
    // A simple boolean check for the UI
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    saveToken(token: string) {
      this.token = token;
      localStorage.setItem('accessToken', token);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('accessToken');
    },
    checkTokenExpiry() {
      if (!this.token) return;
      try {
        const decoded: any = jwtDecode(this.token);
        if (decoded.exp * 1000 < Date.now()) {
          this.logout();
        }
      } catch {
        this.logout();
      }
    }
  }
});