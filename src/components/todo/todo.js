import React from "react";
import firebase from "../../utilities/firebase";
import styles from "./todo.css";

function Todo({ todo }) {
  const completeTodo = () => {
    const todoRef = firebase
      .database()
      .ref("aidkose-assignment-four")
      .child(todo.id);

    todoRef.update({
      complete: !todo.complete,
    });
  };

  const deleteTodo = () => {
    const todoRef = firebase
      .database()
      .ref("aidkose-assignment-four")
      .child(todo.id);

    todoRef.remove();
  };

  return (
    <div>
      <h1 className={todo.complete ? "complete" : "incomplete"}>
        {todo.title}
      </h1>

      <button onClick={deleteTodo} className="del">
        Delete
      </button>
      <button
        onClick={completeTodo}
        className={todo.complete ? "hide-button" : ""}
        id="complete-btn"
      >
        Complete
      </button>
      <button
        onClick={completeTodo}
        className={todo.complete ? "" : "hide-button"}
        id="incomplete-btn"
      >
        Incomplete
      </button>
    </div>
  );
}

export default Todo;
