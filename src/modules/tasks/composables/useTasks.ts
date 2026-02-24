import { useQuery } from "@tanstack/vue-query";
import { fetchTasks } from "../services/tasks.service";

export function useTasks() {
  return useQuery(["tasks"], fetchTasks);
}
