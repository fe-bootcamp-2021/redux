import { useSelector, useDispatch } from "react-redux";
import {
  stepValue,
  decrement,
  increment,
  maxValue,
  minValue,
} from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const max = useSelector((state) => state.counter.max);
  const min = useSelector((state) => state.counter.min);

  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  const handleStep = (e) => {
    dispatch(stepValue(Number(e.target.value)));
  };
  const handleMax = (e) => {
    dispatch(maxValue(Number(e.target.value)));
  };
  const handleMin = (e) => {
    dispatch(minValue(Number(e.target.value)));
  };
  console.log('Counter RENDER');
  return (
    <>
      <h2>{count}</h2>
      <div>
        step <input type="text" onChange={handleStep} />
        MAX COUNT <input type="text" onChange={handleMax} />
        MIN COUNT <input type="text" onChange={handleMin} />
      </div>
      <button disabled={count === max} onClick={handleInc}>+</button>
      <button disabled={count === min} onClick={handleDec}>-</button>
    </>
  );
}
