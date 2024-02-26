import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Component/Product';
import { useSelector } from 'react-redux';

function CartScreen() {
  const cartData = useSelector((store) => store.cart.cartData);

  return (
    <Container className='my-5'>
      <div className='row justify-content-center'>
        {cartData?.length > 0 &&
          cartData.map((item) => (
            <Product
              key={item.id}
              product={item}
              // handlePlusCount={handlePlusCount}
              // handleMinusCount={handleMinusCount}
            />
          ))}
      </div>
    </Container>
  );
}

export default CartScreen;
