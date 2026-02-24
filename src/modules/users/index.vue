<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 py-20 lg:py-[120px] w-full min-h-screen relative"
  >
    <!-- Alert Notification -->
    <div
      v-if="alert.show"
      class="fixed top-5 right-5 z-[10000] w-full max-w-xs transition-all"
    >
      <Alert
        :message="alert.message"
        :variant="alert.type"
        @close="closeAlert"
      />
    </div>

    <!-- Offline Status Banner -->
    <div
      v-if="!isOnline"
      class="fixed top-2 left-1/2 -translate-x-1/2 bg-red-800/100 text-white pb-0 pt-2 rounded-full shadow-lg z-50 animate-pulse px-4"
    >
      <p>Changes will sync when back online</p>
    </div>

    <div class="container-fluid mx-auto px-4">
      <div
        class="text-center max-w-4xl mb-16 flex items-start justify-start gap-3"
      ></div>

      <Grid
        :users="users"
        @completed="updateUser"
        @edit="updateUser"
        @delete="deleteUser"
        @add="addUser"
      />
    </div>

    <!-- Loading / Error States -->
    <p v-if="isLoading" class="text-center">Loading users...</p>
    <p v-if="isError" class="text-center text-red-500">Error loading users</p>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import Grid from "@/modules/users/components/Grid.vue";
import Alert from "@/shared/components/Alert.vue";
import { useUsers } from "@/modules/users/composables/useUsers";
// import { useIsOnline } from '@/shared/composables/useIsOnline';

// Composables
const {
  users,
  isLoading,
  isError,
  addUser,
  updateUser,
  deleteUser,
  alert,
  setAlert,
} = useUsers();

// const isOnline = useIsOnline();
const isOnline = true;

// Close Alert helper
const closeAlert = () => {
  setAlert({ ...alert.value, show: false });
};
</script>
