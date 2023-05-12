import { connect } from 'react-redux';
import { deletetcart, incrementQuantity,decrementQuantity  } from '../store/action';

function CartItem(props) {
  let { product } = props
  console.log(product)
  return (
    <div className='cart-item'>
      <img
        src={`/static/products/${product.sku}_2.jpg`}
        alt=''
        width='80'
      />
      <div className='cart-item-details'>
        <p className='cart-item-name'>
          {product.title}
        </p>
        <p>X | {product.style}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
      <div className='cart-price'>
        <p className='cart-cross' onClick={()=>props.dispatch(deletetcart(product.id,props.cart))}>x</p>
        <p className='price'>$ {product.price}</p>
        <div>
          <Increment cart={props.cart} product={product} dispatch={props.dispatch} />
          <Decrement cart={props.cart} product={product} dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  );
}

function Increment(props) {
  return (
    <svg
      onClick={() => props.dispatch(incrementQuantity(props.product.id, props.cart))}
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
function Decrement(props) {
  return (
    <svg
      onClick={() => props.dispatch(decrementQuantity(props.product.id, props.cart))}
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

export default connect((state) => {
  return { cart: state.cart }
})(CartItem);
