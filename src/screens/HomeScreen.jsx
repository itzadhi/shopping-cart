import React, { useContext, useEffect, useState } from 'react';
import data from '../data';
import ProductList from '../Component/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCart,
  addItem,
  getProductData,
  removeCart,
  removeItem,
} from '../store/slices/productSlice';

function HomeScreen() {
  const productData = useSelector((store) => store.product.productData);
  const dispatch = useDispatch();

  //Initial data mount for once
  useEffect(() => {
    //Initial Mount to fetch all product data
    if (productData?.length === 0) {
      const productDatas = data.map((obj) => ({ ...obj, count: 0 }));
      dispatch(getProductData(productDatas));
    }
    // eslint-disable-next-line
  }, []);

  //Adds the item to cart
  const handleAddCart = (id) => {
    dispatch(addCart(id));
  };

  //Removes the item from cart
  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  //Adds the individual item quantity
  const handlePlusCount = (id) => {
    dispatch(addItem(id));
  };

  //Reduces the individual item quantity
  const handleMinusCount = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      {/* Product List */}
      <section className='py-3'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            {productData?.length > 0 &&
              productData?.map((item) => (
                <ProductList
                  key={item.id}
                  product={item}
                  handleAddCart={handleAddCart}
                  handleRemoveCart={handleRemoveCart}
                  handlePlusCount={handlePlusCount}
                  handleMinusCount={handleMinusCount}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
