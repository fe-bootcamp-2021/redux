import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 0,
  max: 5,
  step: 1,
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (Number(state.max) >= Number(state.value) + Number(state.step))
        state.value = Number(state.value) + Number(state.step);
    },
    decrement: (state) => {
      if (Number(state.min) <= Number(state.value) - Number(state.step))
        state.value = Number(state.value) - Number(state.step);
    },
    min: (state, action) => {
      state.min = action.payload;
      state.value = action.payload;
    },
    max: (state, action) => {
      state.max = action.payload;
    },
    step: (state, action) => {
      state.step = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, min, max, step } = counterSlice.actions;

export default counterSlice.reducer;
