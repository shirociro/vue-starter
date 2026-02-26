import { reactive, onUnmounted } from "vue";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import {
  fetchTasks,
  addTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
  Task,
} from "@/modules/tasks/services/tasks.service";

export const useTasks = () => {
  const queryClient = useQueryClient();
  let timeoutId: any = null;

  // ---------------- ALERT STATE ----------------
  const alert = reactive({
    show: false,
    message: "",
    type: "success",
  });

  const showAlert = (message: string, type: "success" | "destructive" = "success") => {
    alert.show = true;
    alert.message = message;
    alert.type = type;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => { alert.show = false; }, 3000);
  };

  onUnmounted(() => { if (timeoutId) clearTimeout(timeoutId); });

  // ---------------- 1️⃣ FETCH TASKS ----------------
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    // Note: select ensures the component 'tasks' variable is just the array
    select: (data) => data.items, 
    staleTime: 1000 * 60 * 5, // 5 mins
  });

  // ---------------- 2️⃣ OPTIMISTIC CACHE HELPER ----------------
  // This is the "Secret Sauce" - it ensures we always preserve the { items, meta } structure
  const updateLocalCache = async (updateFn: (oldItems: Task[]) => Task[]) => {
    await queryClient.cancelQueries({ queryKey: ["tasks"] });
    const previous = queryClient.getQueryData(["tasks"]);

    queryClient.setQueryData(["tasks"], (old: any) => {
      if (!old) return old;
      return {
        ...old,
        items: updateFn(old.items || []), // Only transform the array part
      };
    });

    return { previous };
  };

  // ---------------- 3️⃣ ADD TASK ----------------
  const addTaskMutation = useMutation({
    mutationFn: addTaskAPI,
    onMutate: async (newTask) => {
      // Optimistically add to the top of the list
      return await updateLocalCache((items) => [newTask, ...items]);
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(["tasks"], context?.previous);
      showAlert("Failed to add Task", "destructive");
    },
    onSuccess: () => showAlert("Successfully added Task!", "success"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  // ---------------- 4️⃣ UPDATE TASK ----------------
  const updateTaskMutation = useMutation({
    mutationFn: (task: Task) => updateTaskAPI(task),
    onMutate: async (updatedTask) => {
      return await updateLocalCache((items) =>
        items.map((t) => (t.id === updatedTask.id ? { ...t, ...updatedTask } : t))
      );
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(["tasks"], context?.previous);
      showAlert("Update failed", "destructive");
    },
    onSuccess: () => showAlert("Successfully updated Task", "success"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  // ---------------- 5️⃣ DELETE TASK ----------------
  const deleteTaskMutation = useMutation({
    mutationFn: deleteTaskAPI,
    onMutate: async (id: string) => {
      return await updateLocalCache((items) => items.filter((t) => t.id !== id));
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(["tasks"], context?.previous);
      showAlert("Delete failed", "destructive");
    },
    onSuccess: () => showAlert("Successfully deleted Task", "success"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  return {
    tasks,
    isLoading,
    isError,
    alert,
    addTask: addTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
  };
};