import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const WorkData = createAsyncThunk("work/WorkData", async () => {
  const data = await fetch("https://www.reddit.com/r/WorkReform.json");
  const response = await data.json();
  return response.data.children.map((data) => data.data);
});

const WorkSlice = createSlice({
  name: "work",
  initialState: {
    value: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [WorkData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [WorkData.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [WorkData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default WorkSlice.reducer;
