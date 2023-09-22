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
    },
    addToCart: (state, action) => {
      //take current state of cart, add whatever item you pass into action
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      //anytime you want to remove from cart, keep all items that don't equal id that you're passing into filter
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      })
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      })
    },
    setIsCartOpen: (state) => {
      //flip watever state is
      state.isCartOpen = !state.isCartOpen;
    }
  }
})

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;