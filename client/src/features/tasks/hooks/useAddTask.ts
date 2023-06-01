import { useMutation, useQueryClient } from "react-query";
import taskService from "../taskService";

const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation(taskService.createTask, {
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(`tasks-${variables.board_id}`);
    },
  });
};

export default useAddTask;
