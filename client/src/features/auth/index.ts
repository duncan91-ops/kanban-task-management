import { LoginForm } from "./components";
import {RegisterForm} from "./components";
import { ActivateFormData } from "./authService";
import authReducer from './authSlice'
import { logout, login, register, activate, reset } from "./authSlice";

export {LoginForm, RegisterForm, authReducer, login, logout, register, activate, reset}
export type {ActivateFormData}