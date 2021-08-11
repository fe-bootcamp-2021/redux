import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  maxValue: 25,
  minValue: -50,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step;
    },
    decrement: (state) => {
      state.value -= state.step;
    },
    incrementByAmount: (state, action) => {
      state.step = action.payload;
    },
    getMaxValue: (state, action) => {
      state.maxValue = action.payload;
    },
    getMinValue: (state, action) => {
      state.minValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getMaxValue, getMinValue } =
  counterSlice.actions;

export default counterSlice.reducer;
