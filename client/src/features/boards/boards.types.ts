export type Column = {
  id: string,
  name: string,
}

export type Board = {
  id: string,
  name: string,
  columns: Column[],
}