import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step:1,
  min:-10,
  max:10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setStepValue: (state, action)=>{
      state.step = action.payload;
    },
    setMinValue: (state, action)=>{
      state.min = action.payload;
    },
    setMaxValue: (state, action)=>{
      state.max = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrementByAmount,incrementByAmount, setStepValue,setMinValue,setMaxValue } = counterSlice.actions;

export default counterSlice.reducer;
