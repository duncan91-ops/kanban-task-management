import { changeTheme } from "./themeSlice";
import themeReducer from './themeSlice'
import { selectCurrentTheme } from "./themeSlice";
import { lightTheme } from "./light-theme";
import { darkTheme } from "./dark-theme";
import { Theme } from "./models";

export {themeReducer, changeTheme, selectCurrentTheme, lightTheme, darkTheme}
export type {Theme}