import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  commentData: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addBtn: (state) => {
        state.commentData = [...state.commentData, state.inputValue]
        state.inputValue = ''
    }
  },
});

export const { getInputValue, addBtn} = commentsSlice.actions;

export default commentsSlice.reducer;
