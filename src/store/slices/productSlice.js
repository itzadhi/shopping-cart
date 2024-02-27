import { createSlice, current } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: [], //initial product data
    cartCount: 0, //cart count
  },
  reducers: {
    //Initial Mount to fetch all product data
    getProductData: (state, action) => {
      return {
        productData: action.payload,
        cartCount: 0,
      };
    },
    //Adds the item to cart by updating count prop in it
    addCart: (state, action) => {
      const productDetails = state.productData.find(
        (item) => item.id === action.payload
      );
      if (productDetails) {
        productDetails['count'] = productDetails?.count + 1;
        state.cartCount += 1; //Adds up to keep track of cart count
      }
    },
    //Removes the item from cart by updating count prop in it
    removeCart: (state, action) => {
      const productDetails = state.productData.find(
        (item) => item.id === action.payload
      );
      if (productDetails) {
        productDetails['count'] = 0;
        state.cartCount -= 1; //Minus up to keep track of cart count
      }
    },
    //Adds the individual item quantity by updating count prop in it
    addItem: (state, action) => {
      const productDetails = state.productData.find(
        (item) => item.id === action.payload
      );
      if (productDetails) {
        productDetails['count'] = productDetails?.count + 1;
      }
    },
    //Reduces the individual item quantity by updating count prop in it
    removeItem: (state, action) => {
      const productDetails = state.productData.find(
        (item) => item.id === action.payload
      );
      if (productDetails) {
        //To keep track of cart count if 1 it is 0, if not 1 we can minus 1
        let updateCount =
          productDetails?.count === 1 ? 0 : productDetails?.count - 1;
        productDetails['count'] = updateCount;

        //Update the cart count
        if (updateCount === 0) {
          state.cartCount -= 1;
        }
      }
    },
  },
});

export const { getProductData, addCart, removeCart, addItem, removeItem } =
  productSlice.actions;

export default productSlice.reducer;
