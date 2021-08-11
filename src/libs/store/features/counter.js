import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 0,
  min: null,
  max: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value >= state.max) {
        return;
      }
      state.value += state.step;
    },
    decrement: (state) => {
      console.log(state.value);
      if (state.value <= state.min) {
        return;
      }
      state.value -= state.step;
    },
    incrementByAmount: (state, action) => {
      state.step += action.payload;
    },
    setMin: (state, action) => {
      state.min = action.payload;
    },
    setMax: (state, action) => {
      state.max = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setMin, setMax } =
  counterSlice.actions;

export default counterSlice.reducer;
