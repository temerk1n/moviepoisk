import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../types/Filters";
import { useAppSelector } from "./store";

const initialState: Filters = {
  genre: "",
  year: 0,
  country: "",
  ageRating: 0,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setFilters: (state, action) => {
      state.year = action.payload.year;
      state.country = action.payload.country;
      state.ageRating = action.payload.ageRating;
    },
    resetFilters: (state) => {
      state.year = initialState.year;
      state.country = initialState.country;
      state.ageRating = initialState.ageRating;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilters, resetFilters } = filtersSlice.actions;
export const useFiltersSelector = () =>
  useAppSelector((state) => state.filters);
