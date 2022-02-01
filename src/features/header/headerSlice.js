import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.value = action.payload;
    },
    clearSearchTerm: (state, action) => {
      state.value = "";
    },
  },
});
export const { setSearchTerm, clearSearchTerm } = headerSlice.actions;
export default headerSlice.reducer;
