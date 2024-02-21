import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';

//{price * (1 - discount / 100)}
const Product = ({ product, handlePlusCount, handleMinusCount }) => {
  const {
    id,
    title,
    count,
    price,
    description,
    thumbnail,
    discountPercentage,
  } = product;

  const subTotal = price * count.toFixed(2);
  const totalPrice = price * count * (1 - discountPercentage / 100).toFixed(2);
  return (
    <Col sm={6} md={8} className='mx-auto col-12 mb-2'>
      <Card className='p-2'>
        <div className='d-inline-flex'>
          <img
            className='img-fluid img-thumbnail'
            style={{ height: '10rem', width: '7rem', objectFit: 'fill' }}
            src={thumbnail}
            alt={title}
          />
          <div className='flex-fill'>
            <div className='d-flex justify-content-between px-2'>
              <h5>{title}</h5>
              <p>Price: ${price}</p>
            </div>
            <div className='d-flex justify-content-between align-items-center '>
              <p className='w-50 px-2'>{description}</p>
              <div className='d-flex align-items-center mb-3'>
                <Button
                  className='m-1 rounded-circle'
                  onClick={() => handlePlusCount(id)}
                >
                  +
                </Button>
                <span className='align-self-center'>{count}</span>
                <Button
                  className='m-1 rounded-circle'
                  onClick={() => handleMinusCount(id)}
                >
                  -
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between mt-3 p-1'>
          <h6>SUBTOTAL:</h6>
          <p>${subTotal}</p>
        </div>
        <div className='d-flex justify-content-between border-bottom p-1'>
          <h6>Discount: </h6>
          <p>{discountPercentage}%</p>
        </div>
        <div className='d-flex justify-content-between p-1 mt-2'>
          <h6>TOTAL:</h6>
          <p>${totalPrice}</p>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
