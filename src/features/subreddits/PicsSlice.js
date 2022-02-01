import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PicsData = createAsyncThunk("pics/PicsData", async () => {
  try {
    const data = await fetch(
      "https://www.reddit.com/r/NatureIsFuckingLit.json"
    );
    const response = await data.json();
    return response.data.children.map((data) => data.data);
  } catch (error) {
    console.log(error);
  }
});

const PicsSlice = createSlice({
  name: "pics",
  initialState: {
    value: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [PicsData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [PicsData.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [PicsData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default PicsSlice.reducer;
