import React from "react";

const Items = props => {
  let spl = props.price.toString().split(".")[1];
  let data = props.price.toString().split(".")[0];
  return (
    <>
      <div className="product_sub_container">
        <div className="product_img_container">
          <span>
            {props.isFreeShipping ? (
              <span className="free_shipping">Free shipping</span>
            ) : (
              ""
            )}
          </span>
          <img
            className="product_img"
            src={`static/products/${props.sku}_1.jpg`}
            alt=""
          />
        </div>
        <div className="product_name_container">
          <p className="product_name">{props.title}</p>
        </div>
        <hr />

        <div className="price_main">
          <span className="dollar">$</span>
          <span className="price">{data}</span>
          <span className="sub_price">
            {!spl ? ".00" : `.${spl}`}
          </span>
          <div className="price_or">
            <span className="or">or </span>
            <span className="or">9 x</span>
            <span className="interest">$1.21</span>
          </div>
          <button
            className="Add_to_cart_btn"
            onClick={() => props.addtocart(props)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
