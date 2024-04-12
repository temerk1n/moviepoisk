import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./store";
import { Filter, FilterName } from "../types/Filter";
import { PaginationParams } from "../types/PaginationParams";

export type FiltersState = PaginationParams & {
  genre?: string;
  country?: string;
  ageRating?: string;
  year?: string;
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
      const { payload } = action;
      state[payload.name] = payload.value;
    },
    deleteFilter: (state, action: PayloadAction<{ name: FilterName }>) => {
      const { payload } = action;
      delete state[payload.name];
      return state;
    },
    resetFilters: (state) => (state = initialState),
  },
});

export default filtersSlice.reducer;
export const { setPaginationParams, addFilter, deleteFilter, resetFilters } =
  filtersSlice.actions;
export const useFiltersSelector = () =>
  useAppSelector((state) => state.filters);
