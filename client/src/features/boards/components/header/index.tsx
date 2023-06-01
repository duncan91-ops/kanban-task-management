import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledHeader from "./index.style";
import { selectCurrentTheme } from "~/features/theme";
import logoLight from "~/assets/icons/logo-light.svg";
import logoDark from "~/assets/icons/logo-dark.svg";
import logoMobile from "~/assets/icons/logo-mobile.svg";
import ellipsis from "~/assets/icons/icon-vertical-ellipsis.svg";
import { selectBoardById } from "../../boardSlice";
import { RootState } from "~/setup/app/store";
import { Modal } from "~/common/components";
import DeleteBoard from "../delete-board";
import EditBoard from "../edit-board";
import { AddTask } from "~/features/tasks";

type BoardsHeaderTypes = {
  menuOpen: boolean;
  id: string;
  optionsOpen: boolean;
  setOptionsOpen: () => void;
};

const BoardsHeader = ({
  menuOpen,
  id,
  optionsOpen,
  setOptionsOpen,
}: BoardsHeaderTypes) => {
  const themeColor = useSelector(selectCurrentTheme);
  const board = useSelector((state: RootState) => selectBoardById(state, id));
  const [deleteBoardOpen, setDeleteBoardOpen] = useState<boolean>(false);
  const [editBoardOpen, setEditBoardOpen] = useState<boolean>(false);
  const [addTaskOpen, setAddTaskOpen] = useState<boolean>(false);

  return (
    <StyledHeader className="header">
      {board && (
        <Modal isOpen={deleteBoardOpen} close={() => setDeleteBoardOpen(false)}>
          <DeleteBoard board={board} close={() => setDeleteBoardOpen(false)} />
        </Modal>
      )}
      {board && (
        <Modal isOpen={editBoardOpen} close={() => setEditBoardOpen(false)}>
          <EditBoard board={board} close={() => setEditBoardOpen(false)} />
        </Modal>
      )}
      {board && (
        <Modal isOpen={addTaskOpen} close={() => setAddTaskOpen(false)}>
          <AddTask board={board} close={() => setAddTaskOpen(false)} />
        </Modal>
      )}
      <div className="logo-box">
        <Link to="/">
          {themeColor === "light" && (
            <img src={logoDark} alt="dark theme logo" className="logo" />
          )}
          {themeColor === "dark" && (
            <img src={logoLight} alt="light theme logo" className="logo" />
          )}
          <img src={logoMobile} alt="logo for mobile" className="logo mobile" />
        </Link>
      </div>
      <div className="header--right">
        <h1 className={`title ${menuOpen && "open"}`}>{board?.name}</h1>
        <div className="cta">
          <button
            className="btn btn__task cta__btn"
            disabled={!board || !(board?.columns.length > 0)}
            type="button"
            onClick={() => setAddTaskOpen(true)}
          >
            + add new task
          </button>
          <button
            className="btn btn__options cta__btn"
            onClick={(e) => {
              e.stopPropagation();
              setOptionsOpen();
            }}
            disabled={!board}
          >
            <img src={ellipsis} alt="ellipsis" />
          </button>
          <div
            className={`options ${themeColor === "dark" ? "dark" : ""} ${
              optionsOpen ? "open" : ""
            }`}
          >
            <button
              className="btn btn__edit options__btn"
              onClick={() => setEditBoardOpen(true)}
            >
              edit board
            </button>
            <button
              className="btn btn__delete options__btn"
              onClick={() => setDeleteBoardOpen(true)}
            >
              delete board
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default BoardsHeader;
