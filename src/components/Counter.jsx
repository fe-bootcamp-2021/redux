import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  handleInputChange,
} from "../libs/store/features/counter";
import Input from "./Input";

export default function Counter() {
  const dispatch = useDispatch();
  const { value, min, max, step } = useSelector((state) => state.counter);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const handleChange = (name) => (e) => {
    dispatch(
      handleInputChange({
        name,
        value: e.target.value.trim() ? parseInt(e.target.value) : "",
      })
    );
  };

  return (
    <div>
      <p>{value}</p>
      <button disabled={value >= max} onClick={handleInc}>
        inc
      </button>
      <button disabled={value <= min} onClick={handleDec}>
        dec
      </button>
      <br />
      <br />
      <br />
      <Input
        label="step"
        placeholder="step..."
        name="step"
        onChange={handleChange("step")}
        value={step}
      />
      <br />
      <Input
        label="max"
        placeholder="max..."
        name="max"
        onChange={handleChange("max")}
        value={max}
      />
      <br />
      <Input
        label="min"
        placeholder="min..."
        name="min"
        onChange={handleChange("min")}
        value={min}
      />
    </div>
  );
}
