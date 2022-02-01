import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const HomeData = createAsyncThunk("Home/HomeData", async () => {
  const data = await fetch("https://www.reddit.com/r/images.json");
  const response = await data.json();
  return response.data.children.map((data) => data.data);
});

const HomeSlice = createSlice({
  name: "Home",
  initialState: {
    value: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [HomeData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [HomeData.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [HomeData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});
export const selectHomeResults = (state) => state.home;
export default HomeSlice.reducer;
