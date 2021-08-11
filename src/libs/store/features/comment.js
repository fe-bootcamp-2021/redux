import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  com:[]
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    textInp: (state, action) => {
      state.text = action.payload;
    },
    getInfo: (state) => {
        state.com=[...state.com,state.text]
    },
  },
});

export const { textInp,getInfo } = commentSlice.actions;

export default commentSlice.reducer;
