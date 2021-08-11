import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  comments:[]
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // add: (state) => {
    //     state.comments = [
    //         { id: state.comments.length, date: now, comment: "" },
    //         ...state.comments,
    //     ];
    // },
    textInp: (state, action) => {
      state.text = action.payload;
    },
    addInp: (state) => {
        const now = new Date().toLocaleString();
        state.comments=[{date: now,comment:state.text},...state.comments]
    },
  },
});

export const { textInp,addInp } = commentSlice.actions;

export default commentSlice.reducer;