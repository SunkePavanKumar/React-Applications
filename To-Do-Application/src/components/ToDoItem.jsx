/* eslint-disable react/prop-types */
import ToDoItems from "./ToDoItems";

function ToDoItem({ todoList, setToDoList }) {
  return <ToDoItems todoList={todoList} setToDoList={setToDoList} />;
}

export default ToDoItem;
