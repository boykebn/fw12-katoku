import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const transferAction = createAsyncThunk(
  "transaction/transfer",
  async (
    { amount, notes, recipientId, pin, cb },
    { rejectWithValue, getState }
  ) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/transactions/transfer`,
        { amount, notes, recipientId, pin },
        config
      );
      cb();
      return res.data.results.token;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
