import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <>
        <div className="cart_all_items">
          <p
            className="remove_item"
            onClick={() => this.props.handleDelete(item.id)}
          >
            ✗
          </p>
          <hr className="hr_border"/>
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
                <p className="item_type">{`${item.availableSizes} | ${item.style}`}</p>
                <p className="item_type">Quantity: {item.quantity}</p>
              </div>
            </div>

            <div className="data_inc">
              <p className="cart_item_remove">✗</p>
              <p className="cart_item_price">
                $ {(+item.price * +item.quantity).toFixed(2)}
              </p>
              <div>
                <button
                  className="remove_item_btn"
                  onClick={() => this.props.handleDecrement(item.id)}
                >
                  -
                </button>
                <button
                  className="add_item_btn"
                  onClick={() => this.props.handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartItem;
