import React, { Component } from "react";
import "./AddItem.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      
    };
  }
  handleInput = (e) => {
    this.setState({ item: e.target.value });
  };
  render() {
    return (
      <div id="myDIV">
        <h2 className="title" style={{ margin: "5px" }}>
          My To Do List
        </h2>
        <input
          onChange={this.handleInput}
          value={this.state.item}
          id="myInput"
          placeholder="Add To Do..."
        />
        <span
          class="addBtn"
          onClick={() => {
            this.props.handleItem(this.state.item);
            this.setState({ item: "" });
          }}
        >
          Add
        </span>
      </div>
    );
  }
}

export default Add;
