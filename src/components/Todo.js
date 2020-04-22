import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const TodosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id} className="collection-item">
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p>You don't have any Todo's, Yay!</p>
  );
  return <div className="collection">{TodosList}</div>;
};

export default Todo;
