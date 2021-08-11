import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  value: 0,
  step: 1,
  min: 0,
  max: 10000000000000,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // reset: (state) => {
    //   state.value = 0;
    // },

    setMinValue: (state, action) => {
      state.min = action.payload;
    },

    setMaxValue: (state, action) => {
      state.max = action.payload;
    },

    setStepValue: (state, action) => {
      state.step = action.payload;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  setStepValue,
  setMinValue,
  setMaxValue,
  setValue,
} = counterSlice.actions;

export default counterSlice.reducer;
