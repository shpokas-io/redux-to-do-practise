import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    rodos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDIspatch = typeof store.dispatch;
export default store;
