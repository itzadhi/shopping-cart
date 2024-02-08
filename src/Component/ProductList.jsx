import React from 'react';

function ProductList({
  id,
  name,
  count,
  image,
  price,
  description,
  handleAddCart,
  handleRemoveCart,
  handlePlusCount,
  handleMinusCount,
}) {
  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        <div
          className='badge bg-dark text-white position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}
        >
          Sale
        </div>

        <img
          className='card-img-top img-fluid'
          style={{ height: '300px', width: '250px', objectFit: 'contain' }}
          src={image}
          alt={name}
        />

        <div className='card-body'>
          <div className='text-center'>
            <h5 className='fw-bolder'>{name}</h5>
            <div className='d-flex justify-content-center'>{description}</div>
            <span>{price}</span>
          </div>
        </div>

        <div className='card-footer border-top-0 bg-transparent'>
          {count > 0 && (
            <div className='d-flex justify-content-center align-item-center mb-2'>
              <button
                className='btn btn-outline-dark m-1'
                onClick={() => handlePlusCount(id)}
              >
                +
              </button>
              <span className='align-self-center'>{count}</span>
              <button
                className='btn btn-outline-dark m-1'
                onClick={() => handleMinusCount(id)}
              >
                -
              </button>
            </div>
          )}

          <div className='text-center'>
            {count === 0 ? (
              <button
                className='btn btn-outline-dark mt-auto'
                onClick={() => handleAddCart(id)}
              >
                Add to cart
              </button>
            ) : (
              <button
                className='btn btn-outline-dark mt-auto'
                onClick={() => handleRemoveCart(id)}
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
