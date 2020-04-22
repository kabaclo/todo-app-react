import React, { Component } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

export class App extends Component {
  state = {
    todos: [
      {
        content: "Learn reactjs",
        id: 1,
      },
      {
        content: "Rest to get prepared for the church",
        id: 2,
      },
      {
        content: "Attend the church service",
        id: 3,
      },
    ],
  };

  //delete todo's
  deleteTodo = (id) => {
    let tododel = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: tododel,
    });
  };

  //Add todo's

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center-align indigo-text">Todo's</h1>
        <Todo deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
