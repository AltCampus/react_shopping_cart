import React from "react";

const Cart = props => {
  return (
    <>
      <div className="container_cart_all">
        <label htmlFor="check">
          <span className="cross">
            <img src="static/bag-icon.png" alt="" />
            <span className="cart_item_count">{props.cartValue.length}</span>
          </span>
        </label>
        <input type="checkbox" id="check" />
        <div className="cart_container">
          {props.cartValue.map(item => (
            <div className="cart_items_container">
              <div className="cart_left_container">
                <div className="cart_img_container">
                  <img
                    className="cart_item_img"
                    src={`static/products/${item.sku}_2.jpg`}
                    alt=""
                  />
                </div>
                <div className="cart_item_title">
                  <p className="item_title_cart">{item.title}</p>
                  <p className="item_type">{item.style}</p>
                  <p className="item_type">Quantity</p>
                </div>
              </div>

              <div className="data_inc">
                <p className="cart_item_remove">✗</p>
                <p className="cart_item_price">$ {item.price}</p>
                <div>
                <button className="remove_item_btn">-</button><button className="add_item_btn">+</button>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
