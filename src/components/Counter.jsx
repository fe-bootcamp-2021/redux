import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, changeStep, changeMin, changeMax } from '../libs/store/features/counter';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);
  const min = useSelector((state) => state.counter.min);
  const max = useSelector((state) => state.counter.max);
  console.log(step);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const handleIncByAmount = () => {
    dispatch(incrementByAmount(step));
  };

  const handleChange = (e, type) => {
    if (type === 'step') {
      dispatch(changeStep(Number(e.target.value)));
    }

    if (type === 'min') {
      dispatch(changeMin(Number(e.target.value)));
    }

    if (type === 'max') {
      dispatch(changeMax(Number(e.target.value)));
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="step">Step:</label>
      <input type="number" id="step" value={step} onChange={(e) => handleChange(e, 'step')} />
      <label htmlFor="min">Min:</label>
      <input type="number" id="min" value={min} onChange={(e) => handleChange(e, 'min')} />
      <label htmlFor="max">Max:</label>
      <input type="number" id="max" value={max} onChange={(e) => handleChange(e, 'max')} />
      <span>{count}</span>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleIncByAmount}>+ By Amount</button>
    </div>
  );
}
