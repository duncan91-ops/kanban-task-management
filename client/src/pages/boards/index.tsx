import { useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import StyledBoards from "./index.style";
import { BoardsHeader } from "~/features/boards";
import { BoardsNav } from "~/features/boards";
import iconShowSidebar from "~/assets/icons/icon-show-sidebar.svg";

const Boards = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const { id } = useParams();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <StyledBoards>
      <BoardsNav closeMenu={closeMenu} menuOpen={menuOpen} />
      <BoardsHeader menuOpen={menuOpen} id={id ? id : ""} />
      <button
        className="btn btn__show-sidebar"
        onClick={() => setMenuOpen(true)}
      >
        <img
          src={iconShowSidebar}
          alt="show sidebar icon"
          className="btn__show-sidebar--icon"
        />
      </button>
      <Outlet />
    </StyledBoards>
  );
};

export default Boards;
