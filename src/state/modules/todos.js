import { createReducer } from "../helpers";
// Constants
export const workspace = "todos";

export const ADD_TODO = `${workspace}/ADD_TODO`;
export const DELETE_TODO = `${workspace}/DELETE_TODO`;

export const FILTER_ALL = `${workspace}/FILTER_ALL`;
export const FILTER_ACTIVE = `${workspace}/FILTER_ACTIVE`;
export const FILTER_COMPLETED = `${workspace}/FILTER_COMPLETED`;
// Action Creators
export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  payload: todo
});

export const filterActive = () => ({
  type: FILTER_ACTIVE
});

export const filterAll = () => ({
  type: FILTER_ALL
});

export const filterCompleted = () => ({
  type: FILTER_COMPLETED
});
// InitialState
const initialState = {
  todoList: [],
  filter: "all"
};
// Reducders
const todoReducer = createReducer(initialState, {
  [ADD_TODO]: (state, action) => ({
    ...state,
    todoList: [...state.todoList, action.payload]
  }),
  [FILTER_COMPLETED]: (state, action) => ({
    ...state,
    filter: "completed"
  }),
  [FILTER_ACTIVE]: (state, action) => ({
    ...state,
    filter: "active"
  }),
  [FILTER_ALL]: (state, action) => ({
    ...state,
    filter: "all"
  })
});

export default todoReducer;
