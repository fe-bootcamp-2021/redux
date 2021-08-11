import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  getMaxValue,
  getMinValue
} from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const minValue = useSelector((state) => state.counter.minValue);
  const maxValue = useSelector((state) => state.counter.maxValue);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const getValue = ({ target }) =>
    dispatch(incrementByAmount(Number(target.value)));

  const handleMaxValue = ({ target }) =>
    dispatch(getMaxValue(Number(target.value)));

  const handleMinValue = ({target}) => dispatch(getMinValue(Number(target.value)))

  return (
    <div>
      <div>
        <input type="number" placeholder="step" onChange={getValue} />
      </div>
      <div>
        <input type="number" placeholder="maxValue" onChange={handleMaxValue} />
      </div>
      <div>
        <input type="number" placeholder="minValue" onChange={handleMinValue} />
      </div>
      {count}
      <button onClick={handleInc} disabled={count >= maxValue}>
        +
      </button>
      <button onClick={handleDec} disabled={count <= minValue}>
        -
      </button>
    </div>
  );
}
