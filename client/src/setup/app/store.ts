import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { themeReducer } from '~/features/theme'
import { authReducer } from '~/features/auth'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store