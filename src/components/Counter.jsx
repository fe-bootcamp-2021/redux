import { useSelector, useDispatch } from "react-redux";
import { decrementByAmount, incrementByAmount, setStepValue, setMaxValue, setMinValue} from "../libs/store/features/counter";
import "./Counter.css"

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
let step = useSelector((state) => state.counter.step);
let min = useSelector((state) => state.counter.min);
let max = useSelector((state)=> state.counter.max)

const handleIncrementByStep = (step) => {
  dispatch(incrementByAmount(step))
}

const handleDecrementByStep = (step) => {
  dispatch(decrementByAmount(step))
}

const setStepAmount = (e) => {
  dispatch(setStepValue(Number(e.target.value)))
}

const setMinAmount = (e) => {
  dispatch(setMinValue(Number(e.target.value)))
}

const setMaxAmount = (e) => {
  dispatch(setMaxValue(Number(e.target.value)))
}

// let disable = false;
// if ((count + step) >= max ) {
//   disable = !disable
// }

  return (
    <div className="container">
      <div><h1>{count}</h1></div>
      <div>
        <button disabled={count-step<min} onClick={() => handleDecrementByStep(step)}> - </button>
        <button disabled={count+step>max} onClick={() => handleIncrementByStep(step)}> + </button>
      </div>
      <div>
        <div>
          <span>Step</span>
        <input onChange={(e) => setStepAmount(e)} type="number" placeholder='1' />
        </div>
        <div>
          <span>Min</span>
        <input onChange={(e) => setMinAmount(e)} type="number" placeholder='-10' />
        </div>
        <div>
          <span>Max</span>
        <input onChange={(e) => setMaxAmount(e)} type="number" placeholder='10' />
        </div>
      </div>
      </div>
  );
}
