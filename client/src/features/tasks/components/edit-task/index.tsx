import { useState, useEffect } from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  useController,
} from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "~/features/theme";
import StyledEditTask from "./index.style";
import { Task } from "../../tasks.types";
import { selectBoardById } from "~/features/boards";
import { RootState } from "~/setup/app/store";
import { useUpdateTask } from "../../hooks";

type EditFormType = {
  id: string;
  title: string;
  description: string;
  subtasks: {
    id?: string;
    title: string;
    completed?: boolean;
  }[];
  status: string;
};

type EditTaskTypes = {
  board_id: string;
  task: Task;
  close: () => void;
};

const EditTask = ({ board_id, task, close }: EditTaskTypes) => {
  const [statusOptionsOpen, setStatusOptionsOpen] = useState<boolean>(false);
  const themeColor = useSelector(selectCurrentTheme);
  const board = useSelector((state: RootState) =>
    selectBoardById(state, board_id)
  );
  const { mutate } = useUpdateTask(board_id);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      subtasks: [{ title: "" }, { title: "" }],
      // status: board?.columns?.[0]?.name || "",
      status: task.status,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "subtasks",
    control,
  });
  const { field: status } = useController({
    name: "status",
    control,
    rules: {
      required: true,
    },
  });

  useEffect(() => {
    reset({
      id: task.id,
      title: task.title,
      description: task.description,
      subtasks: task.subtasks.map((subtask) => ({
        id: subtask.id,
        title: subtask.title,
        completed: subtask.completed,
      })),
      status: task.status,
    });
  }, [reset, task]);

  const onSubmit: SubmitHandler<EditFormType> = (data: EditFormType) => {
    console.log(data);
    mutate({ id: task.id, task: data });
    close();
  };

  return (
    <StyledEditTask
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="title">edit task</h2>
      <div className="container">
        <label htmlFor="task-name" className="label">
          title
        </label>
        <div className="input-container">
          <input
            type="text"
            id="task-name"
            className={`input ${errors.title ? "error" : ""}`}
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && <span className="error-msg">Can't be empty</span>}
        </div>
      </div>
      <div className="container">
        <label htmlFor="task-description" className="label">
          description
        </label>
        <div className="input-container">
          <textarea
            rows={4}
            id="task-description"
            className="input task-description"
            {...register("description")}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <label htmlFor="subtasks" className="label">
          subtasks
        </label>
        <div className="subtasks" id="subtasks">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="input-container">
                <input
                  type="text"
                  className={`input ${errors.subtasks?.[index] ? "error" : ""}`}
                  {...register(`subtasks.${index}.title` as const, {
                    required: true,
                  })}
                />
                <button
                  className="btn btn__remove"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <svg
                    className="btn__remove-icon"
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#828FA3" fillRule="evenodd">
                      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                    </g>
                  </svg>
                </button>
                {errors.subtasks?.[index] && (
                  <span className="error-msg">Can't be empty</span>
                )}
              </div>
            );
          })}
        </div>
        <button
          className={`btn btn__append ${themeColor === "light" ? "light" : ""}`}
          type="button"
          onClick={() => append({ title: "" })}
        >
          + add new subtask
        </button>
      </div>
      <div className="container">
        <span className="label">status</span>
        <div className="input-container">
          <button
            className={`btn btn__select ${statusOptionsOpen ? "open" : ""}`}
            onClick={() => setStatusOptionsOpen(!statusOptionsOpen)}
            type="button"
          >
            <span className="status">{status.value || "select status"}</span>
            {statusOptionsOpen ? (
              <svg
                className="up close"
                width="10"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="#635FC7"
                  stroke-width="2"
                  fill="none"
                  d="M9 6 5 2 1 6"
                />
              </svg>
            ) : (
              <svg
                className="down open"
                width="10"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="#635FC7"
                  stroke-width="2"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            )}
          </button>
          {statusOptionsOpen && (
            <ul className="status__options">
              {board?.columns.map((column) => {
                return (
                  <li key={column.id} className="status__option">
                    <button
                      className="btn btn__status"
                      onClick={() => {
                        status.onChange(column.name);
                        setStatusOptionsOpen(false);
                      }}
                    >
                      {column.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <button className="btn btn__submit" type="submit">
        save changes
      </button>
    </StyledEditTask>
  );
};

export default EditTask;
