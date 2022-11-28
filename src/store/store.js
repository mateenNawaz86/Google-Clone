import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";

// Redux store
const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// export the reducer store
export default store;
