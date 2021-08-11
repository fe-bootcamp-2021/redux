import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import comment from "./features/comment";

export default configureStore({
  reducer: {
    counter,
    comment,
  },
});
