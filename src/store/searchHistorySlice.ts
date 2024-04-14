import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "./store";

export type SearchHistoryState = {
  history: string[];
};

const initialState: SearchHistoryState = {
  history: [],
};

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState: initialState,
  reducers: {
    addToHistory: (state, action) => {
      if (state.history.indexOf(action.payload) === -1) {
        if (state.history.length > 20) {
          state.history.pop();
        }
        state.history.unshift(action.payload);
      }
    },
  },
});

export default searchHistorySlice.reducer;
export const { addToHistory } = searchHistorySlice.actions;
export const useSearchHistorySelector = () =>
  useAppSelector((state) => state.searchHistory);
