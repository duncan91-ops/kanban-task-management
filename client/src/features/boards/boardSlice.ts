import { createEntityAdapter, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import boardService from "./boardService";
import { Board } from "./boards.types";
import { RootState } from "~/setup/app/store";
import { Token } from "../auth/auth.types";

const boardsAdapter = createEntityAdapter<Board>({
  selectId: (board) => board.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})
const initialState = boardsAdapter.getInitialState({
  status: 'idle',
  error: ''
})

export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (token: Token, thunkApi) => {
  try {
    return await boardService.getBoards(token)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkApi.rejectWithValue(message)
  }
})

export const createBoard = createAsyncThunk('boards/createBoard', async (board: Board, thunkApi) => {
  try {
    return await boardService.createBoard(board)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkApi.rejectWithValue(message)
  }
})

export const updateBoard = createAsyncThunk('boards/updateBoard', async (board: Board, thunkApi) => {
  try {
    return await boardService.updateBoard(board)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkApi.rejectWithValue(message)
  }
})

export const deleteBoard = createAsyncThunk('boards/deleteBoard', async (id: string, thunkApi) => {
  try {
    return await boardService.deleteBoard(id)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkApi.rejectWithValue(message)
  }
})

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = ''
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.status = 'successful'
        boardsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
      .addCase(createBoard.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.status = 'successful'
        boardsAdapter.addOne(state, action.payload)
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
      .addCase(updateBoard.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.status = 'successful'
        boardsAdapter.upsertOne(state, action.payload)
      })
      .addCase(updateBoard.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
      .addCase(deleteBoard.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.status = 'successful'
        boardsAdapter.removeOne(state, action.payload)
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  }
})

export const {reset} = boardsSlice.actions
export const { selectAll: selectAllBoards, selectById: selectBoardById } = boardsAdapter.getSelectors<RootState>((state) => state.boards)
export default boardsSlice.reducer