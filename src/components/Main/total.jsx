import React from "react";

const Total = props => {
  
  if (props.totalPrice.length) {
    var price = props.totalPrice.reduce((accum, item) => {
        return accum + (item.price * item.quantity);
      },0);
  }
  return (
    <div className="subtotal_container">
      <p className="subtotal">SUBTOTAL</p>
      <div className="total_container">
        <p className="total">{price ? `$ ${price.toFixed(2)}` : `$ 0.00`}</p>
        <p className="sub_total">{price ? `OR UP TO 9X ${(price/9).toFixed(2)}` : ""}</p>
      </div>
      <button
        className="checkout_btn"
        onClick={() => price ? alert(`Checkout - Subtotal: $ ${price.toFixed(2)} `): alert( `Add some product in the cart!`)}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default Total;
