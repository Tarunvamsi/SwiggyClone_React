// utils/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.itemId;
      state.items = state.items.filter((item) => item.card.info.id !== itemId);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity based on payload
        if (existingItem.quantity <= 0) {
          // Remove item if quantity is zero or negative
          state.items = state.items.filter(
            (item) => item.card.info.id !== itemId
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
