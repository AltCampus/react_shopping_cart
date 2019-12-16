import React from "react";

const Items = props => {
  let item = props.item;
  let spl = item.price.toString().split(".")[1];
  let data = item.price.toString().split(".")[0];
  return (
    <>
      <div className="product_sub_container">
        <div className="product_img_container">
          <span>
            {item.isFreeShipping ? (
              <span className="free_shipping">Free shipping</span>
            ) : (
              ""
            )}
          </span>
          <img
            className="product_img"
            src={`static/products/${item.sku}_1.jpg`}
            alt=""
          />
        </div>
        <div className="product_name_container">
          <p className="product_name">{item.title}</p>
        </div>
        <hr />

        <div className="price_main">
          <span className="dollar">$</span>
          <span className="price">{data}</span>
          <span className="sub_price">
            {!spl ? ".00" : `.${spl}`}
          </span>
          <div className="price_or">
            <span className="or">{item.installments ? "or" :" no"} </span>
            <span className="or">{item.installments ? item.installments +" "+ "x" :""}</span>
            <span className="interest">{item.installments ? "$" +Math.round(item.price/9).toFixed(2):""}</span>
          </div>
          <button
            className="Add_to_cart_btn"
            onClick={() => {props.addtocart(item)}}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
