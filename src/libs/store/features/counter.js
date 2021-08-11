import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  step: 0,
  minVal: "",
  maxVal: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value + state.step <= state.maxVal) {
        state.value += state.step;
      }
    },

    decrement: (state) => {
      if (state.value - state.step >= state.minVal) {
        state.value -= state.step;
      }
    },

    changeStateByStep: (state, action) => {
      state.step = action.payload;
    },

    receiveMinVal: (state, action) => {
      state.minVal = action.payload;
      state.value = state.minVal;
    },

    receiveMaxVal: (state, action) => {
      state.maxVal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  changeStateByStep,
  receiveMinVal,
  receiveMaxVal,
} = counterSlice.actions;

export default counterSlice.reducer;
