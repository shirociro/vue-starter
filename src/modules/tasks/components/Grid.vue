<template>
  <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <!-- First card: TaskAdd -->
    <TaskAdd @add="handleAdd" />

    <!-- task Cards -->
    <div v-for="task in tasks" :key="task.id">
      <!-- Edit Mode -->
      <TaskEdit
        v-if="editingTaskId === task.id"
        :task="task"
        @save="(updatedTask) => handleEdit(updatedTask, task.id)"
        
        @cancel="() => (editingTaskId = null)"
      />

      <!-- Delete Mode -->
      <TaskDelete
        v-else-if="deletingTaskId === task.id"
        :task="task"
        @confirm="() => handleDelete(task.id)"
        @cancel="() => (deletingTaskId = null)"
      />

      <!-- Default Card -->
      <TaskCard
        v-else
        :task="task"
        @edit="() => (editingTaskId = task.id)"
        @delete="() => (deletingTaskId = task.id)"
        @completed="() => emitCompleted(task.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TaskCard from "@/modules/tasks/components/Card.vue";
import TaskEdit from "@/modules/tasks/components/TaskEdit.vue";
import TaskAdd from "@/modules/tasks/components/TaskAdd.vue";
import TaskDelete from "@/modules/tasks/components/TaskDelete.vue";
defineProps({
  tasks: { type: Array, required: true },
});
// Props from parent
const emit = defineEmits(["add", "edit", "delete", "completed"]);

// Refs for editing/deleting state
const editingTaskId = ref(null);
const deletingTaskId = ref(null);

// Emits helper functions
const handleAdd = (task) => {
  emit("add", task);
};

const handleEdit = (task, id) => {
 emit("edit", task);
 editingTaskId.value = null;
};

const handleDelete = (id) => {
  emit("delete", id);
  deletingTaskId.value = null;
};

const emitCompleted = (id) => {
  emit("completed", id);
};
</script>
