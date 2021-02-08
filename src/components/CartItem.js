import React from 'react';

function CartItem(props) {
  return (
    <div className='cart-item'>
      <img
        src='/static/products/876661122392077_2.jpg'
        alt=''
        width='80'
      />
      <div className='cart-item-details'>
        <p className='cart-item-name'>
          Sphynx Tie Dye Wine T-Shirt
        </p>
        <p>X | Front tie dye</p>
        <p>print Quantity: 1</p>
      </div>
      <div className='cart-price'>
        <p className='cart-cross'>x</p>
        <p className='price'>$ 19.00</p>
        <div>
          <Increment />
          <Decrement />
        </div>
      </div>
    </div>
  );
}

function Increment() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
      />
    </svg>
  );
}
function Decrement() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M18 12H6'
      />
    </svg>
  );
}

export default CartItem;
