import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setToDoList] = useState([]);

  return (
    <center className="todo-contaier">
      <AppName />
      <AddToDo setToDoList={setToDoList} todoList={todoList} />
      <div className="items">
        <ToDoItem todoList={todoList} setToDoList={setToDoList} />
      </div>
    </center>
  );
}

export default App;
