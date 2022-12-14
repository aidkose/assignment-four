import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/form";
import TodoList from "./components/todoList/todoList";
import Bootstrap from "./components/bootstrap/bootstrap";
import FontAwesome from "./components/fontAwesome/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <h1>
        Todo Tracker
        <FontAwesomeIcon className="check" icon={faSquareCheck} />
      </h1>
      <Bootstrap />
      <FontAwesome />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
