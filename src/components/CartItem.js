import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../store/actions";

function CartItem(props) {
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart-item">
      <img src={`/static/products/${props.sku}_2.jpg`} alt="" width="80" />
      <div className="cart-item-details">
        <p className="cart-item-name">{props.title}</p>
        <p>
          {props.size} | {props.style}
        </p>
        <p>Quantity: {props.quantity}</p>
      </div>
      <div className="cart-price">
        <p className="cart-cross" onClick={() => handleRemoveItem(props.id)}>
          x
        </p>
        <p className="price">$ {(props.quantity * props.price).toFixed(2)}</p>
        <div>
          <Increment onClick={() => handleIncrement(props.id)} />
          <Decrement
            onClick={
              props.quantity === 1 ? () => {} : () => handleDecrement(props.id)
            }
          />
        </div>
      </div>
    </div>
  );
}

function Increment(props) {
  return (
    <svg
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}
function Decrement(props) {
  return (
    <svg
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </svg>
  );
}

export default CartItem;
