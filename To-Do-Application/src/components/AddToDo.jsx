import { useState } from "react";
import css from "../CSS/AddToDo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddToDo({ setToDoList, todoList }) {
  let [input, setInput] = useState("");
  let [date, setDate] = useState("");
  function inputItem(event) {
    setInput(event.target.value);
  }

  function dataItem(event) {
    setDate(event.target.value);
  }

  function addItems(setToDoList, todoList, event) {
    console.log(event);
    if (input === "" || date === "") {
      alert("Missing Either date or name field");
    } else {
      setToDoList([...todoList, { name: input, date: date }]);
    }
  }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            className={css.input}
            type="text"
            placeholder="Enter the task"
            onChange={inputItem}
            name="input"
          />
        </div>
        <div className="col-4">
          <input
            className={css.input}
            type="date"
            name="date"
            onChange={dataItem}
          />
        </div>
        <div className="col-2">
          <div
            className={`${css.button} btn btn-success`}
            onClick={() => addItems(setToDoList, todoList, event)}
          >
            <IoIosAddCircleOutline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
