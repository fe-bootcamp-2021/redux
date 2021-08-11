import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  min: 0,
  max: 20,
  comments: [],
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

    changeStep: (state, action) => {
      state.step = action.payload;
    },

    minNum: (state, action) => {
      state.min = action.payload;
    },

    maxNum: (state, action) => {
      state.max = action.payload;
    },

    addComment: (state, action) => {
      state.comments.unshift(<p>{action.payload}</p>);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, changeStep, minNum, maxNum, addComment } =
  counterSlice.actions;

export default counterSlice.reducer;
