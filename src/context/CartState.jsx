import React, { useReducer } from 'react';
import CartContext from './CartContext';
import cartReducer from './cartReducer';

const CartState = (props) => {
  const initialState = {
    productData: [],
    cartData: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { productData, cartData } = state;

  //INITIAL DATA
  const getData = (data) => {
    const productDatas = data.map((obj) => ({ ...obj, count: 0 }));
    dispatch({
      type: 'GET_ITEMS',
      payload: productDatas,
    });
  };

  //Add product to cart operation
  const handleAddCart = (id) => {
    const productDetails = productData.find((item) => item.id === id);

    productDetails['count'] = productDetails?.count + 1;

    // setCartCount(cartCount + 1);

    dispatch({
      type: 'ADD_TO_CART',
      payload: [...cartData, productDetails],
    });
  };

  //Remove product from cart operation
  const handleRemoveCart = (id) => {
    const productDetails = productData.find((item) => item.id === id);
    productDetails['count'] = 0;
    let updateCart = cartData.filter((item) => item.id !== id);
    // let updateCount = cartCount === 1 ? 0 : cartCount - 1;
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: updateCart,
    });
    // setCartCount(updateCount);
  };

  //Update the cartData whenever productData is updated
  const updateCartData = (updateDetails) => {
    //updateDetails is productData we pass through
    const cartDetails = updateDetails.filter(function (o1) {
      return cartData.some(function (o2) {
        return o1.id === o2.id; // return the ones with equal id
      });
    });
    dispatch({
      type: 'UPDATE_CART_DATA',
      payload: cartDetails,
    });
  };

  //Adding each product operation
  const handlePlusCount = (id) => {
    const productDetails = productData.map((obj) => {
      if (obj.id === id) {
        return { ...obj, count: obj.count + 1 };
      }
      return obj;
    });

    //Sends updated productData to cartData
    updateCartData(productDetails);
    dispatch({
      type: 'PLUS_ITEM',
      payload: productDetails,
    });
  };

  //Removing each product operation
  const handleMinusCount = (id) => {
    let updateCartDetails = false; //Flag used to check when to update cartData
    const productDetails = productData.map((obj) => {
      if (obj.id === id) {
        //If selected product is going become zero
        if (obj.count === 1) {
          //Update the total cart count
          let updateCart = cartData.filter((item) => item.id !== id);
          updateCartDetails = true; //If it is zero then no need to update the cartData
          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: updateCart,
          });
        }
        return { ...obj, count: obj.count - 1 };
      }
      return obj;
    });
    //If it is zero then no need to update the cartData so we use updateCartDetails is true no update, false means we should update it
    if (!updateCartDetails) {
      updateCartData(productDetails);
    }
    dispatch({
      type: 'MINUS_ITEM',
      payload: productDetails,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartData: cartData,
        productData: productData,
        getData,
        handleAddCart,
        handleRemoveCart,
        handlePlusCount,
        handleMinusCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
