import { useState } from "react";

function IndiaTime() {
  let [date, setDate] = useState(new Date().toLocaleString());
  setInterval(() => {
    setDate(new Date().toLocaleString());
  }, 1000);
  return <p>This is the current time : {date}</p>;
}

export default IndiaTime;
