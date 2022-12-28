import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../action/auth";

const initialState = {
    token: null,
    error: null,
  };
  
  const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logout: (state, action) => {
        return initialState;
      },
    },
    extraReducers: (build) => {
      build.addCase(loginAction.pending, ( state, action ) => {
        state.loading = true;
      });
      build.addCase(loginAction.rejected, ( state, action ) => {
        state.error = action.payload;
        state.loading = false;
      });
      build.addCase(loginAction.fulfilled, ( state, action ) => {
        state.token = action.payload;
        state.error = null;
        state.loading = false
      });
      build.addCase(registerAction.pending, ( state, action ) => {
        state.loading = true;
      });
      build.addCase(registerAction.rejected, ( state, action ) => {
        state.error = action.payload;
        state.loading = false;
      });
      build.addCase(registerAction.fulfilled, ( state, action ) => {
        state.token = action.payload;
        state.error = null;
        state.loading = false
      });
    },
  });
  
  export const { logout } = authReducer.actions;
  
  export default authReducer.reducer;
  