import { createSlice } from '@reduxjs/toolkit';

//state which app will start with
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //any time we have setItems, we can change the items to whatever we pass into payload
    setItems: (state, action) => {
      state.items = action.payload;
    }
  }
})

export const {
  setItems
} = cartSlice.actions;

export default cartSlice.reducer;