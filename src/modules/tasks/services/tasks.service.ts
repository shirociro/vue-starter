import { api } from "@/api/axios";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at?: string;
  updated_at?: string;
}

/** Fetch all tasks */
export const fetchTasks = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<{ items: Task[]; meta: { page: number; limit: number; total: number; totalPages: number } }> => {
  const { data } = await api.get("/tasks", { params });
  // Ensure the return is always { items, meta }
  return {
    items: data.data.items || [],
    meta: data.data.meta || { page: 1, limit: 10, total: 0, totalPages: 0 },
  };
};

/** Add a new task */
export const addTaskAPI = async (task: Omit<Task, "id" | "created_at" | "updated_at">): Promise<Task> => {
  const { data } = await api.post("/tasks", task);
  return data.data;
};

/** Update a task */
export const updateTaskAPI = async (task: Partial<Task>): Promise<Task> => {
  const payload = {
    title: task.title,
    description: task.description,
    status: task.status,      // Uncomment these if you want 
    priority: task.priority,  // checkboxes/dropdowns to work
  };
  const { data } = await api.patch(`/tasks/${task.id}`, payload);
  return data.data;
};

/** Delete a task */
export const deleteTaskAPI = async (id: string): Promise<string> => {
  await api.delete(`/tasks/${id}`);
  return id;
};