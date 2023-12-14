import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice.js";

function DisplayCounter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <p className=" mt-4 text-white text-lg text-center">
        Counter Value is : {value}
      </p>
      <div className="flex items-center justify-evenly mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default DisplayCounter;
