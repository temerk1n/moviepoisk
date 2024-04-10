import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./store";
import { Filter } from "../types/Filter";
import { PaginationParams } from "../types/PaginationParams";

export type filtersState = PaginationParams & {
  options: Filter[];
};

const initialState: filtersState = {
  page: 1,
  limit: 10,
  options: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setPaginationParams: (state, action: PayloadAction<PaginationParams>) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
    addFilter: (state, action: PayloadAction<Filter>) => {
      state.options.push(action.payload);
    },
  },
});

export default filtersSlice.reducer;
export const { setPaginationParams, addFilter } = filtersSlice.actions;
export const useFiltersSelector = () =>
  useAppSelector((state) => state.filters);
