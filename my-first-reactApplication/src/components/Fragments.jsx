import React, { useState } from "react";
import FoodItems from "./FoodItems";
import Container from "./Contaier";
import Event from "./Event";
function Fragments() {
  let healthy_foods = [
    "Spinach",
    "Broccoli",
    "Salmon",
    "Quinoa",
    "Blueberries",
    "Avocado",
    "Oatmeal",
    "Almonds",
    "Sweet potatoes",
    "Greek yogurt",
  ];

  const [items, setItems] = useState(healthy_foods);
  //   let healthy_foods = [];
  return (
    <Container>
      <h1>Healthy Food Items</h1>
      <Event setItems={setItems} items={items} />
    </Container>
  );
}

export default Fragments;
