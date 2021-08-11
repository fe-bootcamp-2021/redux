import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  currentComment: "",
  edit: null,
};
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    add: (state) => {
      const now = new Date().toLocaleString();
      state.comments = [
        { id: state.comments.length, date: now, comment: "" },
        ...state.comments,
      ];
    },
    save: (state, action) => {
      const newComments = state.comments.map((el, ind) => {
        if (ind === action.payload)
          return { ...el, comment: state.currentComment };
        return el;
      });
      state.comments = [...newComments];
      state.edit = null;
    },
    edit: (state, action) => {
      state.edit = action.payload.id;
      state.currentComment = action.payload.comment;
    },
    currentComment: (state, action) => {
      state.currentComment = action.payload;
    },
  },
});

export const { add, save, edit, currentComment } = commentSlice.actions;

export default commentSlice.reducer;
