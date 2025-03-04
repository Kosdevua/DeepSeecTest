import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "../features/wallet/walletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
