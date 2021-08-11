import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  min: 0,
  max: 10000000000
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if(state.value + state.step < state.max){
        state.value += state.step;
      }else{
        state.value = state.max;
      }
    },
    decrement: (state) => {
      if(state.value - state.step > state.min){
        state.value -= state.step
      }else{
        state.value = state.min
      }
    },
    stepValue: (state,action) => {
      state.step = action.payload;
    },
    maxValue: (state,action) => {
      state.max = action.payload;
    },
    minValue: (state,action) => {
      state.min = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {stepValue,maxValue,minValue, increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
