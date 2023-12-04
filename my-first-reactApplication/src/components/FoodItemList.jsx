/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "../CSSModules/FoodItemList.module.css";
function FoodItemList(props) {
  let [activeItems, setActiveItems] = useState([]);
  let { foodName } = props;

  function buyClickEvent() {
    console.log(`The item : ${foodName} is brought`);
    // setBuy(true);
    setActiveItems([...activeItems, foodName]);
    // setBrought(true);
  }
  return (
    <li
      className={`list-group-item  ${css.list}  ${
        activeItems.includes(foodName) && "active"
      }`}
    >
      <span>{foodName}</span>
      <button className="btn btn-primary" onClick={buyClickEvent}>
        Buy
      </button>
    </li>
  );
}

export default FoodItemList;
