import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const TinderData = createAsyncThunk("Tinder/TinderData", async () => {
  const data = await fetch("https://www.reddit.com/r/tinder.json");
  const response = await data.json();
  return response.data.children.map((data) => data.data);
});

const TinderSlice = createSlice({
  name: "Tinder",
  initialState: {
    value: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [TinderData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [TinderData.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [TinderData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default TinderSlice.reducer;
