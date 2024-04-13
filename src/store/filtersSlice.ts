import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./store";
import { Filter } from "../types/Filter";
import { PaginationParams } from "../types/PaginationParams";

export type FiltersState = PaginationParams & {
  genre?: string;
  country?: string;
  ageRating?: string;
  year?: string;
  query?: string;
};

const initialState: FiltersState = {
  page: 1,
  limit: 10,
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
      if (state.query) delete state.query;
      const { payload } = action;
      state[payload.name] = payload.value;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    resetFilters: (state) => (state = initialState),
  },
});

export default filtersSlice.reducer;
export const { setPaginationParams, addFilter, resetFilters, setQuery } =
  filtersSlice.actions;
export const useFiltersSelector = () =>
  useAppSelector((state) => state.filters);
