import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import StyledHome from "./index.styles"
import iconDark from '~/assets/icons/icon-dark-theme.svg'
import iconLight from '~/assets/icons/icon-light-theme.svg'
import logoLight from '~/assets/icons/logo-light.svg'
import logoDark from '~/assets/icons/logo-dark.svg'
import logoMobile from '~/assets/icons/logo-mobile.svg'
import { changeTheme, selectCurrentTheme } from "~/features/theme"
import { useAppDispatch } from "~/setup/app/store"


const Home = () => {
  const themeColor = useSelector(selectCurrentTheme)
  const dispatch = useAppDispatch()

  const changeThemeColor: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(changeTheme())
  }

  return (
    <StyledHome>
      <header className="header">
        <div className="logo-box">
          <Link to="/">
            {themeColor == 'light' && <img src={logoDark} alt="dark theme logo" className="logo" />} 
            {themeColor == 'dark' && <img src={logoLight} alt="light theme logo" className="logo" />}
            <img src={logoMobile} alt="logo for mobile" className="logo mobile" />
          </Link>
        </div>
        <div className="header--right">
          <button className="btn btn__toggle-theme" onClick={changeThemeColor}>
            {themeColor == 'light' && <img src={iconDark} alt="dark theme icon" className="theme__icon" />}
            {themeColor == 'dark' && <img src={iconLight} alt="light theme icon" className="theme__icon" />}
          </button>
          <Link to="/login" className="btn btn__login">Login</Link>
        </div>
      </header>
      <Outlet />
    </StyledHome>
  )
}

export default Home