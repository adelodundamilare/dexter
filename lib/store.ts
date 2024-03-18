import { UniqueIdentifier } from "@dnd-kit/core";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type State = {
  tasks: Task[];
  draggedTask: string | null;
};

export type Actions = {
  addTask: (title: string, description?: string) => void;
  addCol: (title: string) => void;
  dragTask: (id: string | null) => void;
  removeTask: (title: string) => void;
  removeCol: (id: UniqueIdentifier) => void;
  setTasks: (updatedTask: Task[]) => void;
  updateCol: (id: UniqueIdentifier, newName: string) => void;
};
