const cartReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        productData: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cartData: action.payload,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartData: action.payload,
      };
    case 'PLUS_ITEM':
      return {
        ...state,
        productData: action.payload,
      };
    case 'MINUS_ITEM':
      return {
        ...state,
        productData: action.payload,
      };
    case 'UPDATE_CART_DATA':
      return {
        ...state,
        cartData: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
