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

type BoardsHeaderTypes = {
  menuOpen: boolean;
  id: string;
};

const BoardsHeader = ({ menuOpen, id }: BoardsHeaderTypes) => {
  const themeColor = useSelector(selectCurrentTheme);
  const board = useSelector((state: RootState) => selectBoardById(state, id));

  return (
    <StyledHeader className="header">
      <div className="logo-box">
        <Link to="/">
          {themeColor == "light" && (
            <img src={logoDark} alt="dark theme logo" className="logo" />
          )}
          {themeColor == "dark" && (
            <img src={logoLight} alt="light theme logo" className="logo" />
          )}
          <img src={logoMobile} alt="logo for mobile" className="logo mobile" />
        </Link>
      </div>
      <div className="header--right">
        <h1 className={`title ${menuOpen && "open"}`}>{board?.name}</h1>
        <div className="cta">
          <button className="btn btn__task">+ add new task</button>
          <button className="btn btn__options">
            <img src={ellipsis} alt="ellipsis" />
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default BoardsHeader;
