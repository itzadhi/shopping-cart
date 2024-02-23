import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import CartContext from '../context/CartContext';
import Product from '../Component/Product';

function CartScreen() {
  const cartContext = useContext(CartContext);

  const { cartData, handlePlusCount, handleMinusCount } = cartContext;

  return (
    <Container className='my-5'>
      <div className='row justify-content-center'>
        {cartData?.length > 0 &&
          cartData.map((item) => (
            <Product
              key={item.id}
              product={item}
              handlePlusCount={handlePlusCount}
              handleMinusCount={handleMinusCount}
            />
          ))}
      </div>
    </Container>
  );
}

export default CartScreen;
