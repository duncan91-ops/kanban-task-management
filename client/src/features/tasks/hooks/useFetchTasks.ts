import { useQuery } from "react-query";
import taskService from "../taskService";
import { Task } from "../tasks.types";

const useFetchTasks = (board_id: string) => {
  return useQuery(`tasks-${board_id}`, () => taskService.fetchTasks(board_id), {
    select: (data) => {
      const tasks = data.data.map((task: Task) => task);
      return tasks;
    },
  });
};

export default useFetchTasks;
