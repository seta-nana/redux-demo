import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

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

  onButtonClick = _ => {};

  chooseAllItems = _ => {
    let { todoItems } = this.state;

    for (let i = 0; i < todoItems.length; i++) {
      if (!todoItems[i].isDone) {
        todoItems[i].isDone = true;
      }
    }

    return this.setState({ todoItems });
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

  onKeyUp = event => {
    if (event.keyCode === 13) {
      let title = event.target.value;
      const { todoItems } = this.state;

      if (!title) return;

      title = title.trim();
      if (!title) return;

      return this.setState({
        newItem: "",
        todoItems: [{ title, isDone: false }, ...todoItems]
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
    let countItem = todoItems.length;

    return (
      <div className="App">
        <Header
          onClick={this.chooseAllItems}
          onKeyUp={this.onKeyUp}
          newItem={newItem}
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

        <Footer countItem={countItem} onClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
