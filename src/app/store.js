import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice";
import TinderReducer from "../features/subreddits/TinderSlice";
import HomeReducer from "../features/subreddits/HomeSlice";
import MemesReducer from "../features/subreddits/MemesSlice";
import PicsReducer from "../features/subreddits/PicsSlice";
import workReformSlice from "../features/subreddits/workReformSlice";

export const store = configureStore({
  reducer: {
    searchTerm: headerReducer,
    home: HomeReducer,
    memes: MemesReducer,
    pics: PicsReducer,
    tinder: TinderReducer,
    work: workReformSlice,
  },
});
