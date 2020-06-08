import React, { Component } from "react";
import List from "./List";
import GroceryForm from "./GroceryForm";
import "./App.css";

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Peaches", complete: false },
      { id: 2, name: "Green Beans", complete: false },
      { id: 3, name: "Jellybellies", complete: false },
    ],
  };

  addItem = (groceryName) => {
    const newGrocery = { id: `${Math.random()}`, name: groceryName, complete: false };
    const newGroceries = [newGrocery, ...this.state.groceries];
    this.setState({groceries: newGroceries,});
  };

  handleClick = (id) => {
    const { groceries } = this.state;
    const newGroceries = groceries.map((grocery) => {
      if (grocery.id !== id) return grocery;
      return { ...grocery, complete: !grocery.complete };
    });
    this.setState({
      groceries: newGroceries,
    });
  };
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <GroceryForm addItem={this.addItem} />
        <List
          groceryClick={this.handleClick}
          name={"Todo List"}
          items={this.state.groceries}
        />
      </div>
    );
  }
}

export default App;

