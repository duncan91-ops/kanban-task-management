import { useSelector } from "react-redux";
import { selectCurrentTheme } from "~/features/theme";
import StyledDeleteBoard from "./index.style";
import { Board } from "../../boards.types";
import { useAppDispatch } from "~/setup/app/store";
import { deleteBoard } from "../../boardSlice";
import { useNavigate } from "react-router-dom";

const DeleteBoard = ({ board, close }: { board: Board; close: () => void }) => {
  const themeColor = useSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteCurrentBoard = () => {
    dispatch(deleteBoard(board.id));
    navigate("/boards");
    close();
  };

  return (
    <StyledDeleteBoard>
      <h2 className="title">Delete this board?</h2>
      <p className="message">
        Are you sure you want to delete the ‘{board.name}’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="btns">
        <button
          className="btn btn__delete"
          type="button"
          onClick={deleteCurrentBoard}
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
    </StyledDeleteBoard>
  );
};

export default DeleteBoard;
