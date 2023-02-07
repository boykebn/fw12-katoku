import { createSlice } from "@reduxjs/toolkit";

import { transferAction } from "../action/transferAction";

const initialState = {
  amount: null,
  notes: "",
  recipientId: null,
  pin: "",
  time: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transferInput: (state, action) => {
      const { amount, notes, recipientId } = action.payload;
      state = {
        ...state,
        ...{ amount, notes, recipientId },
      };
      return state;
    },
    pinInput: (state, action) => {
      const { pin, time } = action.payload;
      state = {
        ...state,
        ...{ pin, time },
      };
      return state;
    },
  },
  extraReducers: (build) => {},
});

export const { transferInput, pinInput } = transactionSlice.actions;
export default transactionSlice.reducer;
