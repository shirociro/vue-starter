import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as any[],
  }),
  actions: {
    setTasks(tasks: any[]) {
      this.tasks = tasks;
    },
  },
});
