import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, cb }, {rejectWithValue}) => {
    try {
      const { data } = await http().post("/auth/login", { email, password });
      cb();
      return data.results;
    } catch (error) {
      console.log("masuk ke error login")
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/registerAction",
  async ({ firstName, lastName, email, password, cb }) => {
    try {
      console.log("masuk auth action")
      const { data } = await http().post(`/auth/register`, {
        firstName,
        lastName,
        email,
        password,
      });
      cb();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);