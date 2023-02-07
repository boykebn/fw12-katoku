import {combineReducers} from '@reduxjs/toolkit'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from './auth'
import transfer from './transfer';

const authConfig = {
    key: "auth",
    storage
};
const transferConfig = {
  key: "transfer",
  storage,
};

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    transfer: persistReducer(transferConfig, transfer),
});

export default reducer;