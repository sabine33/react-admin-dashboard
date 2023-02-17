import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";

const allReducers = combineReducers({
  login: loginReducer,
});

export const store = configureStore({
  reducer: allReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
