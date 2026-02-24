import axios from "axios";

export async function fetchTasks() {
  const { data } = await axios.get("/api/tasks");
  return data;
}
