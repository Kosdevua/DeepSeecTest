import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.balance += action.payload.amount;
    },
    removeTransaction: (state, action) => {
      const transaction = state.transactions.find(
        (t) => t.id === action.payload
      );
      if (transaction) {
        state.balance -= transaction.amount;
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.payload
        );
      }
    },
  },
});

export const { addTransaction, removeTransaction } = walletSlice.actions;

export default walletSlice.reducer;
