import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  max: 10,
  min: 0,
  step: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < state.max) {
        state.value += state.step;
      }
    },
    decrement: (state) => {
      if (state.value > state.min) {
        state.value -= state.step;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    maxInp: (state, action) => {
      state.max = action.payload;
    },
    minInp: (state, action) => {
      state.min = action.payload;
    },
    stepInp: (state, action) => {
      state.step = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  maxInp,
  minInp,
  stepInp,
} = counterSlice.actions;

export default counterSlice.reducer;
