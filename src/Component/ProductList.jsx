import React from 'react';

function ProductList({
  product,
  handleAddCart,
  handleRemoveCart,
  handlePlusCount,
  handleMinusCount,
}) {
  const { id, title, count, price, description, thumbnail } = product;
  return (
    <div className='mb-5 d-flex '>
      <div className='card h-60 align-content-strech'>
        <div
          className='badge bg-dark text-white position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}
        >
          Sale
        </div>

        <img
          className='card-img-top img-fluid'
          style={{ height: '20rem', width: '17rem', objectFit: 'fill' }}
          src={thumbnail}
          alt={title}
        />

        <div className='card-body'>
          <div className='text-center'>
            <h5 className='fw-bolder'>{title}</h5>
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
