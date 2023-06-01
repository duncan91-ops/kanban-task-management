import { useState } from "react";
import { Task } from "~/features/tasks";
import StyledColumn from "./index.style";
import { Modal } from "~/common/components";
import { ViewTask } from "~/features/tasks";

type BoardColumnTypes = {
  name: string;
  tasks: Task[];
};

const BoardColumn = ({ name, tasks }: BoardColumnTypes) => {
  const [viewTaskOpen, setViewTaskOpen] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task>();

  return (
    <StyledColumn>
      {selectedTask && (
        <Modal isOpen={viewTaskOpen} close={() => setViewTaskOpen(false)}>
          <ViewTask close={() => setViewTaskOpen(false)} task={selectedTask} />
        </Modal>
      )}
      <p className="title">
        <span className="title__spot"></span>
        <span className="title__text">
          {name} ({tasks.length})
        </span>
      </p>
      <div className="tasks">
        {tasks.map((task) => {
          return (
            <div
              className="task"
              onClick={() => {
                setSelectedTask(task);
                setViewTaskOpen(true);
              }}
            >
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
