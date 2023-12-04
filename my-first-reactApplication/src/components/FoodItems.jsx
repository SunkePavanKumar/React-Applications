/* eslint-disable react/prop-types */
import FoodItemList from "./FoodItemList";
import { useState } from "react";
function FoodItems(props) {
  let [buy, setBuy] = useState(false);

  let { foodItems } = props;
  return (
    <ul className="list-group">
      {foodItems.map((food) => (
        <FoodItemList foodName={food} key={food} buy={buy} setBuy={setBuy} />
      ))}
    </ul>
  );
}

export default FoodItems;
