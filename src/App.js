import React, { Component } from "react";
import "./App.css";
import Add from "./Components/AddItem/AddItem";
import ListItems from "./Components/ListItems/ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: Math.random(), item: "task1" },
        { id: Math.random(), item: "task2" },
      ],
    };
  }
  handleItem = (item) => {
    // items.push(item);
    // this.setState({ items: this.state.items.concat(item) });
    if (item) {
      this.setState({
        items: [...this.state.items, { id: Math.random(), item: item }],
      });
    }
  };
  handleDelete = (id) => {
    this.setState({ items: this.state.items.filter((el) => el.id != id) });
  };
  render() {
    return (
      <div className="App">
        <Add handleItem={this.handleItem} />
        <ListItems handleDelete={this.handleDelete} list={this.state.items} />
      </div>
    );
  }
}

export default App;
