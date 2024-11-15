import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: {},
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (state, action) => {
      state.searchResults = { ...action.payload, ...state.searchResults };
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
