import { createStore, combineReducers } from "redux";
// Constants
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const FILTER_ALL = "FILTER_ALL";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_COMPLETED = "FILTER_COMPLETED";
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

const initialState = {
  todoList: [],
  filter: "all"
};
// Reducers
export const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    default:
      return state;
  }
};

export const deleteTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      const { todoList } = state;
      const index = todoList.indexOf(action.payload);
      return {
        ...state,
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)]
      };
    default:
      return state;
  }
};

export const filterTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COMPLETED:
      return {
        ...state,
        filter: "completed"
      };
    case FILTER_ACTIVE:
      return {
        ...state,
        filter: "active"
      };
    case FILTER_ALL:
      return {
        ...state,
        filter: "all"
      };
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  addTodo: addTodoReducer,
  deleteTodo: deleteTodoReducer,
  filterTodo: filterTodoReducer
});

export const store = createStore(todoReducer);

// Test reducers
console.log("store before", store.getState().addTodo);
store.dispatch(addTodo({ title: "hihi", isDone: true }));
console.log("store after", store.getState().addTodo);
