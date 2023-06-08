import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledHeader from "./index.style";
import { changeTheme, selectCurrentTheme } from "~/features/theme";
import { useAppDispatch } from "~/setup/app/store";
import { RootState } from "~/setup/app/store";
import iconDark from "~/assets/icons/icon-dark-theme.svg";
import iconLight from "~/assets/icons/icon-light-theme.svg";
import logoLight from "~/assets/icons/logo-light.svg";
import logoDark from "~/assets/icons/logo-dark.svg";
import logoMobile from "~/assets/icons/logo-mobile.svg";

const Header = () => {
  const dispatch = useAppDispatch();
  const themeColor = useSelector(selectCurrentTheme);
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const changeThemeColor: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(changeTheme());
  };

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
        <button className="btn btn__toggle-theme" onClick={changeThemeColor}>
          {themeColor == "light" && (
            <img src={iconDark} alt="dark theme icon" className="theme__icon" />
          )}
          {themeColor == "dark" && (
            <img
              src={iconLight}
              alt="light theme icon"
              className="theme__icon"
            />
          )}
        </button>
        {isAuthenticated && (
          <Link to="/boards" className="btn btn__boards">
            Boards
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/login" className="btn btn__login">
            Login
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/logout" className="btn btn__logout">
            Logout
          </Link>
        )}
        {isAuthenticated && (
          <Link className="btn btn__avatar" to="/">
            <img
              src={user.profile_photo.small}
              alt="avatar"
              className="avatar"
            />
          </Link>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
