import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import data from './data';
import ProductList from './Component/ProductList';
import { useEffect, useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0); //Total Cart Count
  const [productData, setProductData] = useState([]); //Product Data

  //Initial data mount for once
  useEffect(() => {
    //getting product data from data file
    setProductData(data);
  }, []);

  //Add product to cart operation
  const handleAddCart = (id) => {
    const productDetails = productData.find((item) => item.id === id);

    productDetails['count'] = productDetails?.count + 1;
    setCartCount(cartCount + 1);
  };

  //Remove product from cart operation
  const handleRemoveCart = (id) => {
    const productDetails = productData.find((item) => item.id === id);
    productDetails['count'] = 0;
    let updateCount = cartCount === 1 ? 0 : cartCount - 1;
    setCartCount(updateCount);
  };

  //Adding each product operation
  const handlePlusCount = (id) => {
    const productDetails = productData.find((item) => item.id === id);
    productDetails['count'] = productDetails?.count + 1;
    setProductData([...productData, productDetails]);
  };

  //Removing each product operation
  const handleMinusCount = (id) => {
    const productDetails = productData.find((item) => item.id === id);

    //If selected product is going become zero
    if (productDetails?.count === 1) {
      //Update the total cart count
      setCartCount(cartCount - 1);
    }
    productDetails['count'] = productDetails?.count - 1;
    setProductData([...productData, productDetails]);
  };

  return (
    <div className='App'>
      {/* Navbar */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container px-4 px-lg-5'>
          <a className='navbar-brand' href='/'>
            Shopping Cart
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  About
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  href='/'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Shop
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='/'>
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='/'>
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/'>
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex'>
              <button className='btn btn-outline-dark' type='submit'>
                <i className='bi-cart-fill me-1'></i>
                Cart
                <span className='badge bg-dark text-white ms-1 rounded-pill'>
                  {cartCount}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Product List */}
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            {productData &&
              productData?.map((item) => (
                <ProductList
                  key={item.id}
                  id={item.id}
                  count={item.count}
                  name={item.name}
                  price={item.price}
                  image={item.poster}
                  description={item.summary}
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

export default App;
