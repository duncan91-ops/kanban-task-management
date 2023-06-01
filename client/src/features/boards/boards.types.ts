export type Column = {
  id?: string;
  name: string;
};

export type Board = {
  id: string;
  name: string;
  columns: Column[];
};

export type AddBoard = {
  name: string;
  columns: {
    name: string;
  }[];
};
