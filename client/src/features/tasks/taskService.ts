import {
  CreateTaskData,
  UpdateSubtaskData,
  UpdateTaskData,
} from "./tasks.types";
import { api } from "~/common/utils";

const fetchTasks = (board_id: string) => {
  const url = `/tasks/${board_id}/`;
  return api.get(url);
};

const createTask = ({
  board_id,
  task,
}: {
  board_id: string;
  task: CreateTaskData;
}) => {
  const url = `/tasks/${board_id}/`;
  return api.post(url, task);
};

const updateTask = ({ id, task }: { id: string; task: UpdateTaskData }) => {
  const url = `/tasks/${id}/update/`;
  return api.patch(url, task);
};

const deleteTask = (id: string) => {
  const url = `/tasks/${id}/delete/`;
  return api.delete(url);
};

const updateSubtask = (id: string, subtask: UpdateSubtaskData) => {
  const url = `/tasks/subtasks/${id}/update/`;
  return api.patch(url, subtask);
};

const deleteSubtask = (id: string) => {
  const url = `/tasks/subtasks/${id}/delete/`;
  return api.delete(url);
};

const taskService = {
  createTask,
  fetchTasks,
  updateTask,
  deleteTask,
  updateSubtask,
  deleteSubtask,
};

export default taskService;
