import { Board, AddBoard } from "./boards.types";
import { api } from "~/common/utils";

const getBoards = async () => {
  const url = "/boards/";
  const response = await api.get(url);
  return response.data;
};

const createBoard = async (board: AddBoard) => {
  const url = "/boards/";
  const response = await api.post(url, board);
  return response.data;
};

const updateBoard = async (board: Board) => {
  const url = `/boards/${board.id}/update/`;
  const response = await api.patch(url, board);
  return response.data;
};

const deleteBoard = async (id: string) => {
  const url = `/boards/${id}/delete/`;
  const response = await api.delete(url);
  return response.data;
};

const boardService = { createBoard, getBoards, updateBoard, deleteBoard };

export default boardService;
