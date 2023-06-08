import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledNav from "./index.style";
import logoLight from "~/assets/icons/logo-light.svg";
import logoDark from "~/assets/icons/logo-dark.svg";
import logoMobile from "~/assets/icons/logo-mobile.svg";
import { selectCurrentTheme, changeTheme } from "~/features/theme";
import { selectAllBoards } from "../../boardSlice";
import iconDark from "~/assets/icons/icon-dark-theme.svg";
import iconLight from "~/assets/icons/icon-light-theme.svg";
import { useAppDispatch } from "~/setup/app/store";
import AddBoard from "../add-board";
import { Modal } from "~/common/components";

type BoardsNavTypes = {
  closeMenu: () => void;
  menuOpen: boolean;
};

const BoardsNav = ({ closeMenu, menuOpen }: BoardsNavTypes) => {
  const themeColor = useSelector(selectCurrentTheme);
  const boards = useSelector(selectAllBoards);
  const dispatch = useAppDispatch();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const changeThemeColor: React.MouseEventHandler<HTMLSpanElement> = () => {
    dispatch(changeTheme());
  };

  return (
    <StyledNav className={menuOpen ? "open" : ""}>
      <Modal close={closeModal} isOpen={modalOpen}>
        <AddBoard close={closeModal} />
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
      <div className="content">
        <div className="boards">
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
          <button className="btn btn__board" type="button" onClick={openModal}>
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
        </div>
        <div className="cta">
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
          <div className="hide-sidebar">
            <button className="btn hide-sidebar__btn" onClick={closeMenu}>
              <svg
                width="18"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="hide-sidebar__btn--icon"
              >
                <path
                  d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
                  fill="#828FA3"
                />
              </svg>
              <span className="hide-sidebar__btn--text">hide sidebar</span>
            </button>
          </div>
        </div>
      </div>
    </StyledNav>
  );
};

export default BoardsNav;
