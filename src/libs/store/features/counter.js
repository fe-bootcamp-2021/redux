import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  count: 0,
  step: 1,
  min: 0,
  max: 10000000000000,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.count = action.payload;
    },

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
      state.count += action.payload;
    },

    decrementByAmount: (state, action) => {
      state.count -= action.payload;
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
