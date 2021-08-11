import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, addComment } = commentSlice.actions;

export default commentSlice.reducer;
