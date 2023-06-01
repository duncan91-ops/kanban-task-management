import { RegisterFormData, LoginFormData } from "./components";
import { ActivateFormData, User } from "./auth.types";
import { tokenService, api } from "~/common/utils";

const REGISTER_URL = "/auth/users/";
const LOGIN_URL = "/auth/jwt/create/";
const ACTIVATION_URL = "/auth/users/activation/";
const GET_USER_URL = "/auth/users/me/";

const register = async (userData: RegisterFormData) => {
  const response = await api.post(REGISTER_URL, userData);
  return response.data;
};

const login = async (userData: LoginFormData) => {
  const response = await api.post(LOGIN_URL, userData);
  const token = response.data;
  if (token.access) {
    tokenService.saveToken(token);
  }
  return token;
};

const logout = () => localStorage.removeItem("token");

const activate = async (userData: ActivateFormData) => {
  const response = await api.post(ACTIVATION_URL, userData);
  return response.data;
};

const getUser = async () => {
  const response = await api.get(GET_USER_URL);
  return response.data as User;
};

const authService = { register, login, logout, activate, getUser };

export default authService;
