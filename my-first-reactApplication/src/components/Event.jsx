import { useState } from "react";
import FoodItems from "./FoodItems";
import style from "../CSSModules/Event.module.css";

function Event({ setItems, items }) {
  let [value, setValue] = useState("Enter the food items!");
  function Handler(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="enter the food"
        className={style.eventName}
        onChange={Handler}
      />
      <button
        className={style.btn}
        onClick={() => {
          setItems([...items, value]);
        }}
      >
        Add Item
      </button>
      {items.length === 0 && <h3>No Food Avaliable</h3>}
      {/*Conditional Rendering 
        if else, ternary , using logical rendering
      */}
      <FoodItems foodItems={items} value={value} />
    </>
  );
}

export default Event;
