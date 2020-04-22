import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add todo's</label>
        <input
          id="add-todo"
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
          placeholder="Add todo's ..."
        />
        <button className="btn">Add</button>
      </form>
    );
  }
}

export default AddTodo;
