import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  setStepValue,
  setMinValue,
  setMaxValue,
  setValue,
} from "../libs/store/features/counter";

// let step;
// let min;
// let max;

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  let step = useSelector((state) => state.counter.step);
  let min = useSelector((state) => state.counter.min);
  let max = useSelector((state) => state.counter.max);

  // const handleInc = () => {
  //   dispatch(increment());
  // };

  // const handleDec = () => {
  //   dispatch(decrement());
  // };

  // const handleRes = () => {
  //   dispatch(reset());
  // };

  const handleMinCount = (e) => {
    dispatch(setMinValue(Number(e.target.value)));
  };

  const handleMaxCount = (e) => {
    dispatch(setMaxValue(Number(e.target.value)));
  };

  const handleStepCount = (e) => {
    dispatch(setStepValue(Number(e.target.value)));
  };

  const handleMInCount = (e) => {
    dispatch(setMinValue(Number(e.target.value)));
  };

  const handleIncByCount = (step) => {
    if (count + step <= max) {
      dispatch(incrementByAmount(step));
    } else {
      dispatch(setValue(max));
    }
  };

  const handleDecByCount = (step) => {
    // console.log(count, step, min);
    if (count - step >= min) {
      dispatch(decrementByAmount(step));
    } else {
      dispatch(setValue(min));
    }
  };

  return (
    <div>
      <p>{count}</p>
      <label for="minimum">-Minimum</label>
      <input onChange={handleMinCount} name="minimum" />
      <label for="maximum">Maximum</label>
      <input onChange={handleMaxCount} name="maximum" />
      <label for="step">Step</label>
      <input onChange={handleStepCount} value={step} name="step" />
      <button onClick={() => handleIncByCount(step)}>+</button>
      <button onClick={() => handleDecByCount(step)}>-</button>
      {/* <button onClick={handleRes}>Reset</button> */}
    </div>
  );
}
