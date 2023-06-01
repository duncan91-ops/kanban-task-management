import { useState, useEffect } from "react";
import { Task } from "../../tasks.types";
import StyledViewTask from "./index.style";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "~/features/theme";
import DeleteTask from "../delete-task";
import EditTask from "../edit-task";
import { Modal } from "~/common/components";
import { useParams } from "react-router-dom";

type ViewTaskTypes = {
  close: () => void;
  task: Task;
};

const ViewTask = ({ close, task }: ViewTaskTypes) => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const [editTaskOpen, setEditTaskOpen] = useState<boolean>(false);
  const [deleteTaskOpen, setDeleteTaskOpen] = useState<boolean>(false);
  const themeColor = useSelector(selectCurrentTheme);
  const { id } = useParams();

  useEffect(() => {
    setOptionsOpen(false);
  }, [close]);

  return (
    <StyledViewTask
      onClick={(e) => {
        e.stopPropagation();
        setOptionsOpen(false);
      }}
    >
      <Modal isOpen={editTaskOpen} close={() => setEditTaskOpen(false)}>
        <EditTask
          task={task}
          board_id={id || ""}
          close={() => setEditTaskOpen(false)}
        />
      </Modal>
      <Modal isOpen={deleteTaskOpen} close={() => setDeleteTaskOpen(false)}>
        <DeleteTask
          task={task}
          board_id={id || ""}
          close={() => setDeleteTaskOpen(false)}
        />
      </Modal>
      <header className="header">
        <h3 className="title">{task.title}</h3>
        <div className="options-box">
          <button
            className="btn btn__options"
            onClick={(e) => {
              e.stopPropagation();
              setOptionsOpen(!optionsOpen);
            }}
          >
            <svg
              className="btn__options-icon"
              width="5"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#828FA3" fill-rule="evenodd">
                <circle cx="2.308" cy="2.308" r="2.308" />
                <circle cx="2.308" cy="10" r="2.308" />
                <circle cx="2.308" cy="17.692" r="2.308" />
              </g>
            </svg>
          </button>
          <div
            className={`options ${themeColor === "dark" ? "dark" : ""} ${
              optionsOpen ? "open" : ""
            }`}
          >
            <button
              className="btn btn__edit options__btn"
              onClick={() => {
                setEditTaskOpen(true);
                close();
              }}
            >
              edit task
            </button>
            <button
              className="btn btn__delete options__btn"
              onClick={() => {
                setDeleteTaskOpen(true);
                close();
              }}
            >
              delete task
            </button>
          </div>
        </div>
      </header>
      <p className="description">{task.description}</p>
      <div className="subtasks">
        <h4 className="subtasks__label">
          Subtasks ({task.completed_subtasks} of {task.total_subtasks})
        </h4>
        <ul className="subtasks__list">
          {task.subtasks.map((subtask) => {
            return (
              <li className={`subtask ${subtask.completed ? "done" : ""}`}>
                <div className="subtask__completed">
                  <svg
                    className="subtask__completed-icon"
                    width="10"
                    height="8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#FFF"
                      stroke-width="2"
                      fill="none"
                      d="m1.276 3.066 2.756 2.756 5-5"
                    />
                  </svg>
                </div>
                <p className="subtask__title">{subtask.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="status">
        <h4 className="status__label">current status</h4>
        <p className="status__value">{task.status}</p>
      </div>
    </StyledViewTask>
  );
};

export default ViewTask;
