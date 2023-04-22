import { Task } from "~/features/tasks";
import StyledColumn from "./index.style";

type BoardColumnTypes = {
  name: string;
  tasks: Task[];
};

const BoardColumn = ({ name, tasks }: BoardColumnTypes) => {
  return (
    <StyledColumn>
      <p className="title">
        <span className="title__spot"></span>
        <span className="title__text">
          {name} ({tasks.length})
        </span>
      </p>
      <div className="tasks">
        {tasks.map((task) => {
          return (
            <div className="task">
              <p className="task__title">{task.title}</p>
              <p className="task__stats">
                {task.completed_subtasks} of {task.total_subtasks} subtasks
              </p>
            </div>
          );
        })}
      </div>
    </StyledColumn>
  );
};

export default BoardColumn;
