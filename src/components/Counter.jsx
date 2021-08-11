import { Button, Input, Typography, Card, Container } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
  setStepValue,
  setMinValue,
  setMaxValue,
  setValue,
} from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  let step = useSelector((state) => state.counter.step);
  let min = useSelector((state) => state.counter.min);
  let max = useSelector((state) => state.counter.max);

  const handleMinCount = (e) => {
    dispatch(setMinValue(Number(e.target.value)));
  };

  const handleMaxCount = (e) => {
    dispatch(setMaxValue(Number(e.target.value)));
  };

  const handleStepCount = (e) => {
    dispatch(setStepValue(Number(e.target.value)));
  };

  const handleMInCount = (e) => {
    dispatch(setMinValue(Number(e.target.value)));
  };

  const handleIncByCount = (step) => {
    if (count + step <= max) {
      dispatch(incrementByAmount(step));
    } else {
      dispatch(setValue(max));
    }
  };

  const handleDecByCount = (step) => {
    if (count - step >= min) {
      dispatch(decrementByAmount(step));
    } else {
      dispatch(setValue(min));
    }
  };

  return (
    <Card>
      <Typography color="primary" variant="h1">
        {count}
      </Typography>
      <Container>
        <Typography display="inline" color="secondary">
          Minimum
        </Typography>
        <Input onChange={handleMinCount} name="minimum" />
        <Typography display="inline" color="primary">
          Maximum
        </Typography>
        <Input onChange={handleMaxCount} name="maximum" />
        <label for="step">Step</label>
        <Input onChange={handleStepCount} value={step} name="step" />
      </Container>
      <Button
        disabled={count === max}
        size="large"
        color="primary"
        onClick={() => handleIncByCount(step)}
      >
        +
      </Button>
      <Button
        disabled={count === min}
        size="large"
        color="secondary"
        onClick={() => handleDecByCount(step)}
      >
        -
      </Button>
    </Card>
  );
}
