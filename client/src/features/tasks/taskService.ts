import axios from "axios"
import { Token } from "../auth/auth.types"
import { CreateTaskData, UpdateSubtaskData, UpdateTaskData } from "./tasks.types"

const fetchTasks = (id: string) => {
  const url = `/api/v1/tasks/${id}`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  return axios.get(url, config)
}

const createTask = (id: string, task: CreateTaskData) => {
  const url = `/api/v1/tasks/${id}`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  return axios.post(url, task, config)
}

const updateTask = (id: string, task: UpdateTaskData) => {
  const url = `/api/v1/tasks/${id}/update/`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  return axios.patch(url, task, config)
}

const deleteTask = (id: string) => {
  const url = `/api/v1/tasks/${id}/delete/`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  return axios.delete(url, config)
}

const updateSubtask = (id: string, subtask: UpdateSubtaskData) => {
  const url = `/api/v1/tasks/subtasks/${id}/update/`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  return axios.patch(url, subtask, config)
}

const deleteSubtask = (id: string) => {
  const url = `/api/v1/tasks/subtasks/${id}/delete/`
  const token = JSON.parse(localStorage.getItem('token') || '{}') as Token
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }
  return axios.delete(url, config)
}

const taskService = {createTask, fetchTasks, updateTask, deleteTask, updateSubtask, deleteSubtask}

export default taskService