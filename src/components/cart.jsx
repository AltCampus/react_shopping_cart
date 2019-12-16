import React from "react";
import Total from "./Main/total";
import { IoIosClose } from "react-icons/io";

import CartItem from "./cartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   let cartLength = this.props.cartValue.reduce((accum,item)=> (accum+item.quantity),0)
    return (
      <>
        <div className="container_cart_all">
          <input type="checkbox" id="check" />
          <label className="label1" htmlFor="check">
            <span className="cross">
              <img src="static/bag-icon.png" alt="" />
              <span className="cart_item_count">
                {cartLength}
              </span>
            </span>
          </label>
          <div className="cart_container">
            <label className="labe2" htmlFor="check">
              <span className="cross2">
                <IoIosClose />
              </span>
            </label>
            <div className="cart_logo_container">
              <div className="cart_logo_box">
                <img className="cart_logo" src="static/bag-icon.png" alt="" />
                <span className="cart_item_count cart_item_count2">
                  {cartLength}
                </span>
              </div>
              <p className="cart_logo_text">Cart</p>
            </div>
            {this.props.cartValue.length ? (
              <div className="cart_sub_container">
                {this.props.cartValue.map(item => (
                  <CartItem
                    item={item}
                    handleIncrement={this.props.handleIncrement}
                    handleDecrement={this.props.handleDecrement}
                    handleDelete={this.props.handleDelete}
                  />
                ))}
              </div>
            ) : (
              <div className="empty_cart">
                <p className="add_in_cart">Add some products in the cart</p>
                <span className="smiley">:)</span>
              </div>
            )}
          </div>
          <Total totalPrice={this.props.cartValue} />
        </div>
      </>
    );
  }
}

export default Cart;
