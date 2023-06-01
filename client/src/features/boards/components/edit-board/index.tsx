import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { selectCurrentTheme } from "~/features/theme";
import { useAppDispatch } from "~/setup/app/store";
import { updateBoard } from "../../boardSlice";
import StyledEditBoard from "./index.style";
import { Board } from "../../boards.types";

type EditFormType = {
  id: string;
  name: string;
  columns: {
    id?: string;
    name: string;
  }[];
};

type EditBoardTypes = {
  close: () => void;
  board: Board;
};

const EditBoard = ({ board, close }: EditBoardTypes) => {
  const dispatch = useAppDispatch();
  const themeColor = useSelector(selectCurrentTheme);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: board.id,
      name: board.name,
      columns: board.columns.map((column) => ({
        id: column.id,
        name: column.name,
      })),
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "columns",
    control,
  });

  useEffect(() => {
    reset({
      id: board.id,
      name: board.name,
      columns: board.columns.map((column) => ({
        id: column.id,
        name: column.name,
      })),
    });
  }, [board, reset]);

  const onSubmit: SubmitHandler<EditFormType> = (data: EditFormType) => {
    const columnData = data.columns.map(({ id, name }) => {
      if (id) {
        return { id, name };
      }
      return { name };
    });
    dispatch(updateBoard({ ...data, columns: columnData }));
    close();
  };

  return (
    <StyledEditBoard
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="title">edit board</h2>
      <div className="container">
        <label htmlFor="board-name" className="label">
          board name
        </label>
        <div className="input-container">
          <input
            type="text"
            id="board-name"
            className={`input ${errors.name ? "error" : ""}`}
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span className="error-msg">Can't be empty</span>}
        </div>
      </div>
      <div className="container">
        <label htmlFor="board-columns" className="label">
          board columns
        </label>
        <div className="board-columns" id="board-columns">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="input-container">
                <input
                  type="text"
                  className={`input ${errors.columns?.[index] ? "error" : ""}`}
                  {...register(`columns.${index}.name` as const, {
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
                {errors.columns?.[index] && (
                  <span className="error-msg">Can't be empty</span>
                )}
              </div>
            );
          })}
        </div>
        <button
          className={`btn btn__append ${themeColor === "light" ? "light" : ""}`}
          type="button"
          onClick={() => append({ id: "", name: "" })}
        >
          + add new column
        </button>
      </div>
      <button className="btn btn__submit" type="submit">
        save changes
      </button>
    </StyledEditBoard>
  );
};

export default EditBoard;
