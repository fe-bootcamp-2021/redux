import { createSlice } from '@reduxjs/toolkit';
import { generateUniqueID } from 'web-vitals/dist/modules/lib/generateUniqueID';

const initialState = {
  comments: [],
  input: '',
}

export const commentSlice = createSlice(
  {
    name: 'comment', initialState, reducers: {
      addComment: state => {
        state.comments = [...state.comments, { id: generateUniqueID(), content: state.input }]
      },

      changeInput: (state, action) => {
        state.input = action.payload;
      }
    },
  });

// Action creators are generated for each case reducer function
export const { addComment, changeInput } = commentSlice.actions;

export default commentSlice.reducer;
