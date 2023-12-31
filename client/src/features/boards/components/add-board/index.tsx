import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "~/features/theme";
import { useAppDispatch } from "~/setup/app/store";
import { createBoard } from "../../boardSlice";
import StyledAddBoard from "./index.style";

type AddFormType = {
  name: string;
  columns: {
    name: string;
  }[];
};

type AddBoardTypes = {
  close: () => void
}

const AddBoard = ({ close }: AddBoardTypes) => {
  const dispatch = useAppDispatch()
  const themeColor = useSelector(selectCurrentTheme);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      columns: [{ name: "" }, { name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "columns",
    control,
  });

  const onSubmit: SubmitHandler<AddFormType> = (data: AddFormType) => {
    dispatch(createBoard(data))
    reset()
    close()
  };

  return (
    <StyledAddBoard
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="title">add new board</h2>
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
          onClick={() => append({ name: "" })}
        >
          + add new column
        </button>
      </div>
      <button className="btn btn__submit" type="submit">
        create new board
      </button>
    </StyledAddBoard>
  );
};

export default AddBoard;
