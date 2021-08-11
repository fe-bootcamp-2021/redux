import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  changeStateByStep,
  receiveMinVal,
  receiveMaxVal,
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

  const handleStep = (e) => {
    dispatch(changeStateByStep(+e.target.value));
  };

  const handleMinVal = (e) => {
    dispatch(receiveMinVal(+e.target.value));
  };

  const handleMaxVal = (e) => {
    dispatch(receiveMaxVal(+e.target.value));
  };

  return (
    <div className="all">
      <h2 className="count">{count}</h2>
      <div className="buttons">
        <button className="btn" onClick={handleInc}>
          Increment
        </button>
        <button className="btn" onClick={handleDec}>
          Decrement
        </button>
      </div>
      <div className="inputs">
        <input
          placeholder="Step..."
          className="inp"
          onChange={handleStep}
        ></input>
        <input
          placeholder="Min Value"
          className="inp"
          onChange={handleMinVal}
        ></input>
        <input
          placeholder="Max Value"
          className="inp"
          onChange={handleMaxVal}
        ></input>
      </div>
    </div>
  );
}
