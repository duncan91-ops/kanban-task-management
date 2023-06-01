import { useSelector } from "react-redux";
import { selectCurrentTheme } from "~/features/theme";
import StyledDeleteTask from "./index.style";
import { Task } from "../../tasks.types";
import { useDeleteTask } from "../../hooks";

const DeleteTask = ({
  task,
  close,
  board_id,
}: {
  task: Task;
  close: () => void;
  board_id: string;
}) => {
  const themeColor = useSelector(selectCurrentTheme);
  const { mutate } = useDeleteTask(board_id);

  const deleteCurrentTask = () => {
    mutate(task.id);
    close();
  };

  return (
    <StyledDeleteTask>
      <h2 className="title">Delete this task?</h2>
      <p className="message">
        Are you sure you want to delete the ‘{task.title}’ task and its
        subtasks? This action cannot be reversed.
      </p>
      <div className="btns">
        <button
          className="btn btn__delete"
          type="button"
          onClick={deleteCurrentTask}
        >
          delete
        </button>
        <button
          className={`btn btn__cancel ${themeColor === "light" ? "light" : ""}`}
          type="button"
          onClick={close}
        >
          cancel
        </button>
      </div>
    </StyledDeleteTask>
  );
};

export default DeleteTask;
