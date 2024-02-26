import React, { useContext, useEffect, useState } from 'react';
import data from '../data';
import ProductList from '../Component/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../store/slices/cartSlice';

function HomeScreen() {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  // const {
  //   productData,
  //   getData,
  //   handleAddCart,
  //   handleRemoveCart,
  //   handlePlusCount,
  //   handleMinusCount,
  // } = cartContext;

  //Initial data mount for once
  useEffect(() => {
    setProductData(data);
    // eslint-disable-next-line
  }, []);

  const handleAddCart = (id) => {
    const productDetails = productData.find((item) => item.id === id);
    productDetails['count'] = productDetails?.count + 1;

    dispatch(addCart(productDetails));
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
                  // handleRemoveCart={handleRemoveCart}
                  // handlePlusCount={handlePlusCount}
                  // handleMinusCount={handleMinusCount}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
