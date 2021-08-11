import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  min,
  max,
  step,
} from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const handleMin = (ev) => {
    dispatch(min(ev.target.value));
  };

  const handleMax = (ev) => {
    dispatch(max(ev.target.value));
  };

  const handleStep = (ev) => {
    dispatch(step(ev.target.value));
  };

  return (
    <div>
      <p>
        Min: <input type="number" onChange={handleMin} />
      </p>
      <p>
        Max: <input type="number" onChange={handleMax} />
      </p>
      <p>
        Step: <input type="number" onChange={handleStep} />
      </p>

      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <p> {count}</p>
    </div>
  );
}
