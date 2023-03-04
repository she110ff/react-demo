import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../types';

const initialState: TodoState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<Todo>) => {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
