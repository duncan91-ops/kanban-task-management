import { useState } from "react";
import { useParams, Outlet, useOutletContext } from "react-router-dom";
import StyledBoards from "./index.style";
import { BoardsHeader } from "~/features/boards";
import { BoardsNav } from "~/features/boards";
import iconShowSidebar from "~/assets/icons/icon-show-sidebar.svg";

type ContextType = {
  menuOpen: boolean;
};

const Boards = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const { id } = useParams();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <StyledBoards onClick={() => setOptionsOpen(false)}>
      <BoardsNav closeMenu={closeMenu} menuOpen={menuOpen} />
      <BoardsHeader
        menuOpen={menuOpen}
        id={id ? id : ""}
        optionsOpen={optionsOpen}
        setOptionsOpen={() => setOptionsOpen(!optionsOpen)}
      />
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
      <Outlet context={{ menuOpen }} />
    </StyledBoards>
  );
};

export const useMenuContext = () => {
  return useOutletContext<ContextType>();
};

export default Boards;
