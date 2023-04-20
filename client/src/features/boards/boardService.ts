import axios from "axios";
import { Token } from "../auth/auth.types";
import { Board } from "./boards.types";

const getBoards = async (token: Token) => {
  const url = '/api/v1/boards/'
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  const response = await axios.get(url, config)
  return response.data
}

const createBoard = async (board: Board) => {
  const url = '/api/v1/boards/'
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  const response = await axios.post(url, board, config)
  return response.data
}

const updateBoard = async (board: Board) => {
  const url = `/api/v1/boards/${board.id}/update/`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  const response = await axios.put(url, board, config)
  return response.data
}

const deleteBoard = async (id: string) => {
  const url = `/api/v1/boards/${id}/delete/`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  const response = await axios.delete(url, config)
  return response.data
}

const boardService = {createBoard, getBoards, updateBoard, deleteBoard}

export default boardService