import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import styles from "./form.css";

function Form() {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("aidkose-assignment-four");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div className="wrapper">
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}

export default Form;
