import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Filter} from "../types/Filter";
import {useAppSelector} from "./store";
import {FiltersFields} from "../types/FiltersFields";


const initialState: Map<FiltersFields, string | number> = new Map([
  [FiltersFields.page, 1],
  [FiltersFields.limit, 10]
]);

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Filter[]>) => {
      action.payload.forEach(filter => state.set(filter.name, filter.value));
    },
    resetFilters: (state) => {
      state = initialState;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilters, resetFilters } = filtersSlice.actions;
export const useFiltersSelector = () =>
  useAppSelector((state) => state.filters);
