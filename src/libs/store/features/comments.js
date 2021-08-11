import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    addComment: (state, action) => {
      if (state.inputValue !== "") {
        state.comments = [...state.comments, state.inputValue];
        state.inputValue = "";
      }
    },
  },
});

export const { getInputValue, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
