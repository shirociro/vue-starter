<template>
  <div v-if="authLoading" class="auth-loading-screen">
    <div class="spinner"></div>
    <p>Verifying session...</p>
  </div>

  <component :is="layout" v-else>
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const authLoading = ref(false);

// Handle Loading State globally
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    authLoading.value = true;
  }
  next();
});

router.afterEach(() => {
  authLoading.value = false;
});

// Layout logic: Default to 'div' or a 'DefaultLayout' if meta.layout isn't defined
const layout = computed(() => route.meta.layout || 'div');
</script>

<style scoped>
.auth-loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>