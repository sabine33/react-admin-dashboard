import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export type LoginState = {
  error: string | null;
  user: object | null;
  authToken: string | null;
  isLoading: boolean;
};

const initialState: LoginState = {
  error: null,
  user: {},
  authToken: null,
  isLoading: false,
};

type LoginType = {
  email: string;
  password: string;
};

export const login = createAsyncThunk(
  "/auth/login",
  async ({ email, password }: LoginType) => {
    let data = await api.login({ email, password });
    console.log(data);
    return data.data;
  }
);
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState as LoginState,
  reducers: {},
  extraReducers: {
    [login.pending.toString()]: (state) => {
      state.isLoading = false;
    },
    [login.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.data.user;
      state.authToken = action.payload.data.token;
      state.error = null;
      state.isLoading = false;
      localStorage.setItem("token", JSON.stringify(state.authToken));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [login.rejected.toString()]: (state, action) => {
      state.user = null;
      state.error = action.error.message;
      console.log(action.error);
      state.isLoading = false;
      alert("Error occured");
    },
  },
});
export default loginSlice.reducer;
