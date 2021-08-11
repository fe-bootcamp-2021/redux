import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  step: 1,
  min: 0,
  max: 20,
};

export const counterSlice = createSlice(
  {
    name: 'counter', initialState, reducers: {
      increment: (state) => {
        if (state.value + 1 <= state.max) {
          state.value += 1;
        }
      },
      decrement: (state) => {
        if (state.value - 1 >= state.min) {
          state.value -= 1;
        }
      },
      incrementByAmount: (state, action) => {
        if (state.value + action.payload < state.max) {
          state.value += action.payload;
        }
      },
      changeStep: (state, action) => {
        state.step = action.payload;
      },
      changeMin: (state, action) => {
        state.min = action.payload;
      },
      changeMax: (state, action) => {
        state.max = action.payload;
      },
    },
  });

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeStep, changeMin, changeMax } = counterSlice.actions;

export default counterSlice.reducer;
