import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payload: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action) {
      return {
        ...state,
        payload: action.payload,
      };
    },
  },
});

// export all the actions inside this slice
export const { search } = searchSlice.actions;

export default searchSlice.reducer;
