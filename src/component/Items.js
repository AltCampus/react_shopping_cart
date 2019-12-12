import React from "react";
import data from "../data";

function Items(props) {
  return (
    <>
      <div className="flex1">
        <img
          className="item-images"
          src={`static/products/${props.sku}_1.jpg`}
          alt=""
        />
        <div className="free-box">
          <h4 className="free-shipping">Free Shippping</h4>
        </div>
        <div className="price-details">
          <h2 className="description">{props.title}</h2>
          <hr className="tiny-hr"></hr>
          <h4 className="real-price">
            <span className="price">{props.currencyFormat}</span>
            <span className="the-highlighted-price">{props.price}</span>
          </h4>

          <h4 className="another-price">
            <span className="price2">or9</span>
            <span className="other-half">x$1.21</span>
          </h4>
          <button className="addtocart">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default Items;
