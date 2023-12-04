import css from "../styles/buttons.module.css";
import Button from "./button";
import PropTypes from "prop-types";

function Buttons({ display, setDisplay }) {
  const calculatorSymbols = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className={css.buttons}>
      <Button
        buttons={calculatorSymbols}
        display={display}
        setDisplay={setDisplay}
        key={display}
      />
    </div>
  );
}

Buttons.prototype = {
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
};
export default Buttons;
