import { createSlice } from "@reduxjs/toolkit";

const idGenerator = () => {
    let id = 0;
    return () => {
        id += 1 + Math.random();
        return id;
    };
};

const getRandomId = idGenerator();

const initialState = {
    inputValue: "",
    allComment: [],
    changeInput: ""
};

export const counterSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {

        givValue: (state, action) => {
            state.inputValue = action.payload;
        },

        addComment: (state) => {
            if (state.inputValue) {
                state.allComment = [{ id: getRandomId(), comment: state.inputValue, date: new Date().toLocaleString(), class: "hidden" }, ...state.allComment]
                state.inputValue = ""
            }
        },

        handleChangeCom: (state, action) => {
            state.allComment = state.allComment.map((elm) => {
                if (elm.id === action.payload.id) {
                    return {
                        id: elm.id,
                        comment: elm.inputValue,
                        date: new Date().toLocaleString(),
                        class: "block"
                    }
                }
                return elm
            })
        },

        givChangeValue: (state, action) => {
            state.changeInput = action.payload;
        },

        handleSaveChange: (state, action) => {
            state.allComment = state.allComment.map((elm) => {
                if (elm.id === action.payload.id) {
                    return {
                        id: elm.id,
                        comment: state.changeInput,
                        date: new Date().toLocaleString(),
                        class: "hidden"
                    }
                }
                return elm
            })
        }
    },
});

export const { givValue, addComment, handleChangeCom, handleSaveChange, givChangeValue } = counterSlice.actions;

export default counterSlice.reducer;
