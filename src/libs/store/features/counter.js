import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  min: -10,
  max: 10,
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
      state.value += action.payload;
    },
    handleInputChange: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, handleInputChange } =
  counterSlice.actions;

export default counterSlice.reducer;
