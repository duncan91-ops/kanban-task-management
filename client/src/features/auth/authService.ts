import axios from "axios";
import { RegisterFormData, LoginFormData } from "./components";

const REGISTER_URL = '/api/v1/auth/users/'
const LOGIN_URL = '/api/v1/auth/jwt/create/'
const ACTIVATION_URL = '/api/v1/auth/users/activation/'

export type ActivateFormData = {
  uid: string,
  token: string,
}

const register = async (userData: RegisterFormData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(REGISTER_URL, userData, config)
  return response.data
}

const login = async (userData: LoginFormData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(LOGIN_URL, userData, config)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => localStorage.removeItem('user')

const activate = async (userData: ActivateFormData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(ACTIVATION_URL, userData, config)
  return response.data
}

const authService = {register, login, logout, activate}

export default authService