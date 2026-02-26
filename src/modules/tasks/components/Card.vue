<template>
  <div class="w-full">
    <fwb-card
      class="relative h-full min-h-[250px] transition-all duration-300 hover:shadow-lg"
    >
      <div class="p-5">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ task.title }}
            </h3>
          </div>
         
          <div class="flex space-x-1">
            <fwb-tooltip content="Edit task" placement="top">
              <template #trigger>
                <fwb-button
                  color="light"
                  pill
                  square
                  size="sm"
                  @click="$emit('edit')"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </fwb-button>
              </template>
            </fwb-tooltip>

            <fwb-tooltip content="Delete task" placement="top">
              <template #trigger>
                <fwb-button
                  color="light"
                  pill
                  square
                  size="sm"
                  @click="$emit('delete', task.id)"
                >
                  <svg
                    class="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </fwb-button>
              </template>
            </fwb-tooltip>
          </div>
        </div>
         <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <h3 class="text-sm font-medium text-gray-900 dark:text-white">
              {{ task.description }}
            </h3>
          </div>
        </div>
        <div class="mt-4 flex items-center text-sm text-gray-500">
          Status: {{ task.status }}
        </div>
      </div>
    </fwb-card>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});

defineEmits(["edit", "delete"]);
</script>
