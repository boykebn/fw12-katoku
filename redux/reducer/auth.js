import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../action/auth";

const initialState = {
  token: null,
  loading: false,
  message: null,
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
      build.addCase(loginAction.pending, (state, action) => {
        state.loading = true;
      });

      build.addCase(loginAction.rejected, (state, action) => {
        state.token = null;
        state.loading = false;
        state.message = action.error.message;
      });

      build.addCase(loginAction.fulfilled, ( state, action ) => {
        state.token = action.payload.token
        state.loading = false;
        state.message = action.payload.message;
      });

      build.addCase(registerAction.pending, ( state, action ) => {
        state.loading = true;
      });

      build.addCase(registerAction.rejected, ( state, action ) => {
        state.token = null;
        state.loading = false;
        state.message = action.error.message;
      });

      build.addCase(registerAction.fulfilled, ( state, action ) => {
        state.token = action.payload;
        state.loading = false
        state.message = action.payload.message;
      });
    },
  });
  
  export const { logout } = authReducer.actions;
  
  export default authReducer.reducer;
  