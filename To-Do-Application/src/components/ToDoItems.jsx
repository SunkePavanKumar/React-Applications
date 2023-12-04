/* eslint-disable react/prop-types */

import css from "../CSS/ToDoItems.module.css";
import { MdDelete } from "react-icons/md";
function ToDoItems({ todoList, setToDoList }) {
  function deleteItem(index, todoList, setToDoList) {
    todoList.splice(index, 1);
    setToDoList([...todoList]);
    console.log(todoList, index);
  }
  return (
    <div className="container">
      {todoList.map((list, index) => (
        <div className="row" key={index}>
          <div className="col-6">{list.name}</div>
          <div className="col-4">{list.date}</div>
          <div className="col-2">
            <div
              className={`${css.button} btn btn-danger`}
              onClick={() => deleteItem(index, todoList, setToDoList)}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoItems;
