import { useMutation, useQueryClient } from "react-query";
import taskService from "../taskService";

const useUpdateTask = (board_id: string) => {
  const queryClient = useQueryClient();

  return useMutation(taskService.updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(`tasks-${board_id}`);
    },
  });
};

export default useUpdateTask;
