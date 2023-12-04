/* eslint-disable react/prop-types */
import css from "../styles/display.module.css";
function Display({ display }) {
  // function readData(event) {
  //   console.log(event);
  //   event.target.value = 500;
  // }
  return (
    <div className={css.display}>
      <input type="text" readOnly value={display} />
    </div>
  );
}

export default Display;
