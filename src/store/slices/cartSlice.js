import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [], //initial cart data
  },
  reducers: {
    addCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeCart: (state, action) => {
      // let id = action.payload;
      // const productDetails = productData.find((item) => item.id === id);
      // productDetails['count'] = 0;
      // let updateCart = cartData.filter((item) => item.id !== id);
      // state.cartData.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
