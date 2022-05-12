import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, decrementProduct } from '../store/action';

function CartItem(props) {
  let findItem = props.item;
  return (
    <div className='cart-item'>
      <img src={`/static/products/${findItem.sku}_2.jpg`} alt='' width='80' />
      <div className='cart-item-details'>
        <p className='cart-item-name'>{findItem.title}</p>
        <p>X | {findItem.style}</p>
        <p>print Quantity: {findItem.quantity}</p>
      </div>
      <div className='cart-price'>
        <p
          className='cart-cross'
          onClick={() => props.dispatch(removeFromCart(findItem.id))}
        >
          x
        </p>
        <p className='price'>
          {findItem.currencyFormat} {findItem.price}
        </p>
        <div>
          <Increment item={findItem} dispatch={props.dispatch} />
          <Decrement item={findItem} dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  );
}

function Increment(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
      onClick={() => props.dispatch(addToCart(props.item))}
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
function Decrement(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='plus-icon'
      onClick={() => props.dispatch(decrementProduct(props.item.id))}
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

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
  };
}

export default connect(mapStateToProps)(CartItem);
