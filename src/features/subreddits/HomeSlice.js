import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const HomeData = createAsyncThunk(
  "Home/HomeData",
  async (payload, thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/r/images.json`);
    const data = await response.json();

    // const arr = ["one", "two", "three"];

    // const numArr = arr
    //   .map((str) => {
    //     switch (str) {
    //       case "one":
    //         return 1;
    //       case "two":
    //         return 2;
    //     }
    //   })
    //   .filter((n) => n !== undefined && n !== null);

    // const numArrReduced = arr.reduce((acc, str) => {
    //   // at first iteration, acc = []
    //   const n = (() => {
    //     switch (str) {
    //       case "one":
    //         return 1;
    //       case "two":
    //         return 2;
    //     }
    //   })();

    //   if (n !== undefined && n !== null) {
    //     acc.push(n);
    //     // acc = [n]
    //   }

    //   return acc;
    // }, []);

    // const reducedString = arr.reduce((acc, str) => {
    //   return acc + str;
    // }, "");

    // console.log(arr);
    // console.log(numArr);
    // console.log(numArrReduced);
    // console.log(reducedString);

    return data.data.children.reduce((acc, data) => {
      if (data.data.title.includes(payload) || !payload) {
        acc.push(data.data);
      }
      return acc;
    }, []);
  }
);

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
