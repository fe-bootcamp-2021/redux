import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  min: 0,
  max: 10,
  step: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    increment: (state) => {
      if (state.value + state.step <= state.max) {
        state.value += state.step;
      }
    },

    decrement: (state) => {
      if (state.value - state.step >= state.min) {
        state.value -= 1;
      }
    },

    step: (state, action) => {
      state.step = action.payload;
    },

    minNum: (state, action) => {
      state.min = action.payload
      state.value = action.payload
    },
    
    maxNum: (state, action) => {
      state.max = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { step, maxNum, minNum, increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
