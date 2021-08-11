import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  commentVal: "",
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    changeCommntVal: (state, action) => {
      state.commentVal = action.payload;
    },

    addComment: (state) => {
      state.comments.push(state.commentVal);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComment, changeCommntVal } = commentSlice.actions;

export default commentSlice.reducer;
