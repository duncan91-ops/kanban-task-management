import axios from "axios";
import { RegisterFormData, LoginFormData } from "./components";
import { ActivateFormData, Token, User } from "./auth.types";

const REGISTER_URL = '/api/v1/auth/users/'
const LOGIN_URL = '/api/v1/auth/jwt/create/'
const ACTIVATION_URL = '/api/v1/auth/users/activation/'
const GET_USER_URL = '/api/v1/auth/users/me/'

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
  const token = response.data as Token
  if (token.access) {
    localStorage.setItem('token', JSON.stringify(token))
  }
  return token
}

const logout = () => localStorage.removeItem('token')

const activate = async (userData: ActivateFormData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(ACTIVATION_URL, userData, config)
  return response.data
}

const getUser = async (token: Token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }

  const response = await axios.get(GET_USER_URL, config)
  return response.data as User
}

const authService = {register, login, logout, activate, getUser}

export default authService