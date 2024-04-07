import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./store";
import { PaginationParams } from "../types/PaginationParams";

const initialState: PaginationParams = {
  page: 1,
  limit: 10,
};

export const paginationParamsSlice = createSlice({
  name: "paginationParams",
  initialState: initialState,
  reducers: {
    setPaginationParams: (state, action: PayloadAction<PaginationParams>) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
  },
});

export default paginationParamsSlice.reducer;
export const { setPaginationParams } = paginationParamsSlice.actions;
export const usePaginationParamsSelector = () =>
  useAppSelector((state) => state.paginationParams);
