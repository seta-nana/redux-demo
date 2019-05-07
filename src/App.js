import React, { Component } from "react";
import "./App.css";
import checkAll from "./img/check-all.svg";
import add from "./img/add.svg";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      currentFilter: "all",
      todoItems: [
        { title: "Read Sapiens", isDone: false },
        { title: "Work out", isDone: false },
        { title: "Finish React exercises", isDone: false }
      ]
    };
    // Solution 1 - Bind then onItemClick(item) { ... }
    // this.onItemClick = this.onItemClick.bind(this);
  }
  // Solution 2 - arrow function
  onItemClick = item => {
    return event => {
      const isDone = item.isDone;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isDone: !isDone
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  };

  chooseAllItems = _ => {
    return this.setState({
      todoItems: [
        { title: "Read Sapiens", isDone: true },
        { title: "Work out", isDone: true },
        { title: "Finish React exercises", isDone: true }
      ]
    });
  };

  deleteItem = item => {
    return event => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [...todoItems.slice(0, index), ...todoItems.slice(index + 1)]
      });
    };
  };

  onKeyUp = e => {
    if (e.keyCode === 13) {
      let title = e.target.value;
      const { todoItems } = this.state;

      if (!title) return;

      title = title.trim();
      if (!title) return;

      return this.setState({
        newItem: "",
        todoItems: [
          {
            title,
            isDone: false
          },
          ...todoItems
        ]
      });
    } else {
      return;
    }
  };

  onChange = e => {
    return this.setState({
      newItem: e.target.value
    });
  };

  render() {
    let { todoItems, newItem } = this.state;

    return (
      <div className="App">
        <Header
          onClick={this.chooseAllItems}
          onKeyUp={this.onKeyUp}
          newItem={this.newItem}
          onChange={this.onChange}
        />

        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClick(item)}
              deleteItem={this.deleteItem(item)}
            />
          ))}
      </div>
    );
  }
}

export default App;
