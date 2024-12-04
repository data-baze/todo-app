// src/features/todos/todosSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

interface TodosState {
  tasks: Todo[];
}

const initialState: TodosState = {
  tasks: [
    { id: "1", name: "Training at the Gym", completed: true },
    { id: "2", name: "Play Paddle with friends", completed: false },
    { id: "3", name: "Burger BBQ with family", completed: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ name: string }>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        name: action.payload.name,
        completed: false,
      };
      state.tasks.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      const todo = state.tasks.find((task) => task.id === action.payload.id);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const todo = state.tasks.find((task) => task.id === action.payload.id);
      if (todo) todo.name = action.payload.name;
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
