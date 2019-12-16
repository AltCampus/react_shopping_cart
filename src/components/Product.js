import React from "react";

export default function Product(props) {
  return (
    <li className="product">
      <div className="image">
        <img src={`/static/products/${props.sku}_1.jpg`} alt={props.title} />
      </div>
      <div>
        <p>{props.title}</p>
        <hr />
        <div className="price__details">
          <div className="price">
            <small>{props.currencyFormat}</small>
            <span>{props.price}</span>
          </div>
          <div className="installment">
            <small>{" or " + props.installments}</small>
            <span>{"x $" + (props.price / props.installments).toFixed(2)}</span>
          </div>
        </div>

        <button>Add To Cart</button>
      </div>
    </li>
  );
}
