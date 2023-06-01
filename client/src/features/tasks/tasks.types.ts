export type Subtask = {
  id: string;
  title: string;
  completed: boolean;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  total_subtasks: number;
  completed_subtasks: number;
  subtasks: Subtask[];
};

export type CreateSubtaskData = {
  title: string;
};

export type CreateTaskData = {
  title: string;
  description: string;
  status: string;
  subtasks: CreateSubtaskData[];
};

export type UpdateSubtaskData = {
  id?: string;
  title: string;
  completed?: boolean;
};

export type UpdateTaskData = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: UpdateSubtaskData[];
};
