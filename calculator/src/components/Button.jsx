/* eslint-disable react/prop-types */
function Button({ buttons, display, setDisplay }) {
  function changeValue(button, display) {
    if (button === "=") {
      try {
        display = eval(display);
        setDisplay(display);
      } catch (error) {
        setDisplay("ERROR");
      }
    } else {
      display += button;
      setDisplay(display);
    }
  }
  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => {
            changeValue(button, display);
          }}
        >
          {button}
        </button>
      ))}
    </>
  );
}

export default Button;
