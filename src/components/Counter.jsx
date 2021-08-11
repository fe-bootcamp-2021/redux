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
      <input className="border-2 border-indigo-600" onChange={handleChangeMin} placeholder="Min" />
      <input className="border-2 border-indigo-600" onChange={handleChangeMax} placeholder="Max" />
      <input className="border-2 border-indigo-600" onChange={incrementByAmount} placeholder="Step" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleInc}>+</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDec}>-</button>
    </div>
  );
}
