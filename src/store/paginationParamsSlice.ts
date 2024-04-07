import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationParams } from "../types/PaginationParams";

export const paginationParamsSlice = createSlice({
  name: "paginationParams",
  initialState: {
    page: 1,
    limit: 10,
  },
  reducers: {
    setPaginationParams: (state, action: PayloadAction<PaginationParams>) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
  },
});

export default paginationParamsSlice.reducer;
export const { setPaginationParams } = paginationParamsSlice.actions;
