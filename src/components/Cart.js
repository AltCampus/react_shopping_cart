import CartItem from './CartItem';
import { connect } from 'react-redux';

function Cart(props) {
  let totalQuantity = props.cart.reduce((acc, cv) => {
    acc = acc + cv.quantity
    return acc
  }, 0)

  let totalAmount = props.cart.reduce((acc, cv) => {
    acc = acc + cv.price * cv.quantity
    return acc
  }, 0)

  if (!props.isOpen) {
    return <ClosedCart dispatch={props.dispatch} isOpen={props.isOpen} totalQuantity={totalQuantity}/>;
  }
  return (
    <aside className='cart'>
      <div onClick={() => props.dispatch({ type: 'isOpen', payload: props.isOpen ? false : true })} className='close-btn'>
        X
      </div>
      <div className='cart-body'>
        <div className='cart-heading'>
          <div className='cart-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='icon'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <span className='item-count'>{totalQuantity}</span>
          </div>
          <h2>Cart</h2>
        </div>
        {props.cart.map((c) => <CartItem key={c.id} product={c} />)}

        <div className='cart-checkout'>
          <div>
            <p>SUBTOTAL</p>
            <p>$ {totalAmount}</p>
          </div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </aside>
  );
}

function ClosedCart(props) {
  return (
    <div className='close-cart'>
      <span onClick={() => props.dispatch({ type: 'isOpen', payload: props.isOpen ? false : true })} className='open-btn'>
        <div className='cart-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='item-count'>{props.totalQuantity}</span>
        </div>
      </span>
    </div>
  );
}

export default connect((state) => {
  return {
    cart: state.cart,
    isOpen: state.isOpen
  }
})(Cart);
