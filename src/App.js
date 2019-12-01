import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { arrayOf, shape, string, bool, func } from "prop-types";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

import { addTodo, deleteTodo } from "./state/modules/todos";

import "./App.css";

function App({ todoList, filter, addTodo, deleteTodo }) {
  const [newItem, setNewItem] = useState("");
  const filteredTodos = useMemo(() => filterItem(todoList, filter), [
    todoList,
    filter
  ]);

  function filterItem(todoList, filter) {
    if (todoList && todoList.length) {
      const filteredTodos = todoList.filter(item => {
        switch (filter) {
          case "active":
            return item.isDone === false;
          case "completed":
            return item.isDone === true;
          default:
            return item;
        }
      });
      return filteredTodos;
    }

    return todoList;
  }

  const onKeyUp = event => {
    if (event.keyCode === 13) {
      const title = event.target.value;

      if (!title || !title.trim()) return;

      addTodo({ title, isDone: false });
      setNewItem("");
    }
  };

  const onChange = e => {
    const value = e.target.value;
    setNewItem(value);
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="App-container">
        <Header onKeyUp={onKeyUp} newItem={newItem} onChange={onChange} />
        {filteredTodos.length > 0 &&
          filteredTodos.map((item, index) => (
            <TodoItem key={index} item={item} deleteItem={deleteTodo(item)} />
          ))}
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  todoList: arrayOf(
    shape({
      title: string,
      isDone: bool
    })
  ),
  addTodo: func.isRequired,
  deleteTodo: func.isRequired
};

export default connect(
  state => ({
    todoList: state.todos.todoList,
    filter: state.todos.filter
  }),
  dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    deleteTodo: todo => () => dispatch(deleteTodo(todo))
  })
)(App);
