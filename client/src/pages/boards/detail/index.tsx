import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBoardById } from "~/features/boards";
import { RootState } from "~/setup/app/store";
import StyledBoardDetail from "./index.style";
import { BoardColumn } from "~/features/boards";
import { useMenuContext } from "..";
import { Task, useFetchTasks } from "~/features/tasks";
import { Loading } from "~/common/components";

const BoardDetail = () => {
  const { id } = useParams();
  const board = useSelector((state: RootState) =>
    selectBoardById(state, id || "")
  );
  const { menuOpen } = useMenuContext();
  const { isLoading, data: tasks } = useFetchTasks(id || "");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledBoardDetail>
      {board && board.columns.length > 0 ? (
        <div className={`columns ${menuOpen ? "open" : ""}`}>
          {board?.columns.map((column) => {
            return (
              <BoardColumn
                key={column.id}
                name={column.name}
                tasks={tasks.filter(
                  (task: Task) => task.status === column.name
                )}
              />
            );
          })}
        </div>
      ) : (
        <div className="message-box">
          <div className={`message ${menuOpen ? "open" : ""}`}>
            <p className="message__text">
              This board is empty. Create a new column to get started.
            </p>
            <button className="btn btn__column message__btn">
              + add new column
            </button>
          </div>
        </div>
      )}
    </StyledBoardDetail>
  );
};

export default BoardDetail;
