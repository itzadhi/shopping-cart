import React, { useContext, useEffect, useState } from 'react';
import data from '../data';
import ProductList from '../Component/ProductList';
import CartContext from '../context/CartContext';

function HomeScreen() {
  const cartContext = useContext(CartContext);

  const {
    productData,
    getData,
    handleAddCart,
    handleRemoveCart,
    handlePlusCount,
    handleMinusCount,
  } = cartContext;

  //Initial data mount for once
  useEffect(() => {
    getData(data);
    // eslint-disable-next-line no-use-before-define
  }, []);

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
