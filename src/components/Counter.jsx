import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  setMin,
  setMax,
} from "../libs/store/features/counter";

let divStyle = { display: "flex", flexDirection: "column", width: "100px" };

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  let input;
  let min, max;
  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };
  const handleStep = () => {
    dispatch(incrementByAmount(Number(input.value)));
  };
  const handleMin = () => {
    dispatch(setMin(Number(min.value)));
  };
  const handleMax = () => {
    dispatch(setMax(Number(max.value)));
  };

  return (
    <div>
      {count}
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <div style={divStyle}>
        <input
          type="number"
          ref={(node) => {
            input = node;
          }}
        />
        <button onClick={handleStep}>set step</button>
        <label name="min">
          min
          <input
            onChange={handleMin}
            name="min"
            type="text"
            ref={(node) => {
              min = node;
            }}
          />
        </label>
        <label name="max">
          max
          <input
            onChange={handleMax}
            name="max"
            type="text"
            ref={(node) => {
              max = node;
            }}
          />
        </label>
      </div>
    </div>
  );
}
