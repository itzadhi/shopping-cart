import React from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Component/Product';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/slices/productSlice';

function CartScreen() {
  const productData = useSelector((store) => store.product.productData);
  const dispatch = useDispatch();

  const handlePlusCount = (id) => {
    dispatch(addItem(id));
  };

  const handleMinusCount = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Container className='my-5'>
      <div className='row justify-content-center'>
        {productData?.length > 0 &&
          productData.map((item) => (
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
