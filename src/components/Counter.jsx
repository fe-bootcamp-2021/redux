import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, maxInp, minInp, stepInp } from "../libs/store/features/counter";

export default function Counter() {
  // const [max,setMax]=useState(10)
  // const [min,setMin]=useState(0)
  // const [step,setStep]=useState(1)
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleInc = () => {
    dispatch(increment());
  };
  const handledec = () => {
    dispatch(decrement());
  };

  const handleMaxInp=(e)=>{
    dispatch(maxInp(Number(e.target.value)))
    console.log(e.target.value)
  }

  const handleMinInp=(e)=>{
    dispatch(minInp(Number(e.target.value)))
    console.log(e.target.value)
  }
  const handleStepInp=(e)=>{
    dispatch(stepInp(Number(e.target.value)))
    console.log(e.target.value)
  }

  // addComment

  return (
    <div>
      <input type='text' placeholder='max'  onChange={handleMaxInp}/>
      <input type='text' placeholder='min'  onChange={handleMinInp} />
      <input type='text' placeholder='step'  onChange={handleStepInp} />
      {count}
      <button onClick={handleInc}>+</button>
      <button onClick={handledec}>-</button>
      
      
    </div>
  );
}
