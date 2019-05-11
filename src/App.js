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
      todoItems: []
    };
    // Solution 1 - Bind then onItemClick(item) { ... }
    // this.onItemClick = this.onItemClick.bind(this);
  }
  // Retrieving data from the localStorage
  componentDidMount() {
    let todoItems = [];
    const keys = Object.keys(localStorage);
    let title, isDone;

    for (let i = 0; i < keys.length; i++) {
      title = keys[i];
      isDone = JSON.parse(localStorage.getItem(title));

      todoItems.push({ title, isDone });
    }

    this.setState({
      todoItems
    });
  }
  // Solution 2 - arrow function
  filterItem = _ => {
    let { currentFilter, todoItems } = this.state;

    todoItems = todoItems.filter(item => {
      switch (currentFilter) {
        case "active":
          return item.isDone === false;
        case "completed":
          return item.isDone === true;
        default:
          return item;
      }
    });

    return todoItems;
  };

  currentFilterAll = _ => {
    return this.setState({
      currentFilter: "all"
    });
  };

  currentFilterActive = _ => {
    return this.setState({
      currentFilter: "active"
    });
  };

  currentFilterCompleted = _ => {
    return this.setState({
      currentFilter: "completed"
    });
  };

  selectAllItems = _ => {
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
      // Delete item in the localStorage
      localStorage.removeItem(todoItems[index].title);
    };
  };

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
      // Update isDone in the localStorage
      localStorage.setItem(item.title, !item.isDone);
    };
  };

  onKeyUp = event => {
    if (event.keyCode === 13) {
      let title = event.target.value;
      const { todoItems } = this.state;

      if (!title) return;

      title = title.trim();
      if (!title) return;
      // Add a new item to the localStorage
      localStorage.setItem(title, "false");

      return this.setState({
        newItem: "",
        todoItems: [{ title, isDone: false }, ...todoItems]
      });
    }

    return;
  };

  onChange = e => {
    return this.setState({
      newItem: e.target.value
    });
  };

  render() {
    let todoItems = this.filterItem();
    let { newItem, currentFilter } = this.state;
    let countItem = todoItems.length;

    return (
      <div className="App">
        <h1>Todos</h1>
        <div className="App-container">
          <Header
            onClick={this.selectAllItems}
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

          <Footer
            countItem={countItem}
            currentFilter={currentFilter}
            currentFilterAll={this.currentFilterAll}
            currentFilterActive={this.currentFilterActive}
            currentFilterCompleted={this.currentFilterCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
