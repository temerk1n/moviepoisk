import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {

  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;