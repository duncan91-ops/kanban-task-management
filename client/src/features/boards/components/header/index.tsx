import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import StyledHeader from "./index.style";
import { selectCurrentTheme, changeTheme } from "~/features/theme";
import { useAppDispatch } from "~/setup/app/store";
import logoLight from "~/assets/icons/logo-light.svg";
import logoDark from "~/assets/icons/logo-dark.svg";
import logoMobile from "~/assets/icons/logo-mobile.svg";
import ellipsis from "~/assets/icons/icon-vertical-ellipsis.svg";
import { selectBoardById, selectAllBoards } from "../../boardSlice";
import { RootState } from "~/setup/app/store";
import { Modal } from "~/common/components";
import DeleteBoard from "../delete-board";
import EditBoard from "../edit-board";
import { AddTask } from "~/features/tasks";
import AddBoard from "../add-board";
import iconDark from "~/assets/icons/icon-dark-theme.svg";
import iconLight from "~/assets/icons/icon-light-theme.svg";

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
  const boards = useSelector(selectAllBoards);
  const [deleteBoardOpen, setDeleteBoardOpen] = useState<boolean>(false);
  const [editBoardOpen, setEditBoardOpen] = useState<boolean>(false);
  const [addTaskOpen, setAddTaskOpen] = useState<boolean>(false);
  const [showBoards, setShowBoards] = useState<boolean>(false);
  const [createBoardOpen, setCreateBoardOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const changeThemeColor: React.MouseEventHandler<HTMLSpanElement> = () => {
    dispatch(changeTheme());
  };

  useEffect(() => {
    setShowBoards(false);
  }, [board]);

  return (
    <StyledHeader className="header" onClick={() => setShowBoards(false)}>
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
      <Modal isOpen={createBoardOpen} close={() => setCreateBoardOpen(false)}>
        <AddBoard close={() => setCreateBoardOpen(false)} />
      </Modal>
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
        <button
          className="btn btn__boards"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowBoards(!showBoards);
          }}
        >
          <span className="btn btn__boards-title">
            {board ? board.name : "select board"}
          </span>
          {!showBoards ? (
            <svg
              className="btn__boards-icon"
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
          ) : (
            <svg
              className="btn__boards-icon"
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
          )}
        </button>
        <div className="cta">
          <button
            className="btn btn__task cta__btn"
            disabled={!board || !(board?.columns.length > 0)}
            type="button"
            onClick={() => setAddTaskOpen(true)}
          >
            <span className="btn__task-text">+ add new task</span>
            <svg
              className="btn__task-icon"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFF"
                d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
              />
            </svg>
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
      {showBoards && (
        <div className="section-boards">
          <div className="boards" onClick={(e) => e.stopPropagation()}>
            <p className="boards__title">all boards ({boards.length})</p>
            <ul className="boards__list">
              {boards.map((board) => {
                return (
                  <li className="boards__item" key={board.id}>
                    <NavLink
                      to={`${board.id}`}
                      className={({ isActive }) =>
                        isActive ? "active boards__link" : "boards__link"
                      }
                    >
                      <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="btn__link--icon"
                      >
                        <path
                          d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                          fill="#828FA3"
                        />
                      </svg>
                      <span className="boards__link--text">{board.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn btn__board"
              type="button"
              onClick={() => {
                setShowBoards(false);
                setCreateBoardOpen(true);
              }}
            >
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="btn__board--icon"
              >
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828FA3"
                />
              </svg>
              <span className="btn__board--text">+ create new board</span>
            </button>
            <div className="switch">
              <img
                src={iconLight}
                alt="light theme icon"
                className="switch__icon"
              />
              <label htmlFor="switch" className="switch__container">
                <input
                  type="checkbox"
                  name="switch"
                  id="switch"
                  className="switch__input"
                  checked={themeColor === "dark"}
                />
                <span
                  className="switch__slider"
                  onClick={changeThemeColor}
                ></span>
              </label>
              <img
                src={iconDark}
                alt="dark theme icon"
                className="switch__icon"
              />
            </div>
          </div>
        </div>
      )}
    </StyledHeader>
  );
};

export default BoardsHeader;
