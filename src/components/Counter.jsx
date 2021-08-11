import { useSelector, useDispatch } from "react-redux";
import { setStepValue,setMinValue,setMaxValue,decrementByAmount,incrementByAmount } from "../libs/store/features/counter";
import classes from './Counter.module.css'

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  let step = useSelector((state) => state.counter.step)
  let min = useSelector((state) => state.counter.min)
  let max = useSelector((state) => state.counter.max)

  
  const setStepAmount = (e) => {
    dispatch(setStepValue(Number(e.target.value)))
  }

  const setMinAmount = (e) => {
    dispatch(setMinValue(Number(e.target.value)))
  }

  const setMaxAmount = (e) => {
    dispatch(setMaxValue(Number(e.target.value)))
  }

  const handleDecrementByStep = (step) => {
    dispatch(decrementByAmount(step))
  }
  
  const handleIncrementByStep = (step) => {
    dispatch(incrementByAmount(step))
  }

  return (
    <div className={classes.container}>
      <div><h2> -Counter App and Comments Section with Redux- </h2></div>
      <div className={classes.number}>{count}</div>
      <div>
        <button disabled={(count-step<min)} className={classes.pointer} onClick={() => handleDecrementByStep(step)}> - </button>
        <button disabled={(count+step>max)} className={classes.pointer} onClick={() => handleIncrementByStep(step)}> + </button>
      </div>
      <div>
        <div>
          <span>Step</span>
        <input onChange={(e) => setStepAmount(e)} type="number" placeholder='default/1' />
        </div>
        <div>
          <span>Min</span>
        <input  onChange={(e) => setMinAmount(e)} type="number" placeholder='default/(-10)' />
        </div>
        <div>
          <span>Max</span>
        <input  onChange={(e) => setMaxAmount(e)} type="number" placeholder='default/10' />
        </div>
      </div>
    </div>
  );
}
