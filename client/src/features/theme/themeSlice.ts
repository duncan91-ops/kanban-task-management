import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/setup/app/store";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'dark',
  },
  reducers: {
    changeTheme: (state) => {
      if (state.value === 'light') {
        state.value = 'dark'
      } else if (state.value === 'dark') {
        state.value = 'light'
      }
    }
  }
})

export const {changeTheme} = themeSlice.actions
export const selectCurrentTheme = (state: RootState) => state.theme.value
export default themeSlice.reducer