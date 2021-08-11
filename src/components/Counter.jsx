import { useSelector, useDispatch } from "react-redux";
import {
  minNum,
  decrement,
  increment,
  maxNum,
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
  const handleChangeMin = (e) => {
    dispatch(minNum(Number(e.target.value)));
  };
  const handleChangeMax = (e) => {
    dispatch(maxNum(Number(e.target.value)));
  };
  const incrementByAmount = (e) => {
    dispatch(step(Number(e.target.value)));
  };

  return (
    <div>
      {count}
      <input onChange={handleChangeMin} placeholder="Min" />
      <input onChange={handleChangeMax} placeholder="Max" />
      <input onChange={incrementByAmount} placeholder="Step" />
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}
