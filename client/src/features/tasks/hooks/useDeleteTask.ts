import { useMutation, useQueryClient } from "react-query";
import taskService from "../taskService";

const useDeleteTask = (board_id: string) => {
  const queryClient = useQueryClient();

  return useMutation(taskService.deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(`tasks-${board_id}`);
    },
  });
};

export default useDeleteTask;
