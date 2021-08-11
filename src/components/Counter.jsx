import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  changeStep,
  minNum,
  maxNum,
} from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);
  const min = useSelector((state) => state.counter.min);
  const max = useSelector((state) => state.counter.max);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const handleStep = ({ target }) => {
    dispatch(changeStep(Number(target.value)));
  };

  const handleMinNum = ({ target }) => {
    dispatch(minNum(Number(target.value)));
  };

  const handleMaxNum = ({ target }) => {
    dispatch(maxNum(Number(target.value)));
  };

  return (
    <div>
      {count}
      <br />
      <button disabled={count + step > max} onClick={handleInc}>
        +
      </button>
      <button disabled={count - step < min} onClick={handleDec}>
        -
      </button>
      <br />
      <p>Step</p>
      <input type="number" value={step} onChange={handleStep} />
      <p>Max</p>
      <input type="number" value={max} onChange={handleMaxNum} />
      <p>Min</p>
      <input type="number" value={min} onChange={handleMinNum} />
    </div>
  );
}
