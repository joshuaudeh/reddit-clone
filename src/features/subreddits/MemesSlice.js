import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadData = createAsyncThunk("memes/loadData", async () => {
  const data = await fetch("http://www.reddit.com/r/memes.json");
  const response = await data.json();
  return response.data.children.map((data) => data.data);
});

const MemesSlice = createSlice({
  name: "memes",
  initialState: {
    value: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [loadData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadData.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default MemesSlice.reducer;
