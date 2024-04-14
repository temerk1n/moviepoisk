import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "./store";

export type User = {
  login: string;
  password: string;
};

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {setUser} = userSlice.actions;
export const useUserSelector = () => useAppSelector((state) => state.user.user);
