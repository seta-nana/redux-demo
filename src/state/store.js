import { compose, createStore } from "redux";
import reducers from "./index";
import { addTodo } from "./modules/todos";
// Use Redux DevTools Extension if available and not in production.
const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers());

export default store;

// Test reducers
console.log("store before", store.getState().addTodo);
store.dispatch(addTodo({ title: "hihi", isDone: true }));
console.log("store after", store.getState().addTodo);
