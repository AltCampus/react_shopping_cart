import React from "react";
import { render } from "react-dom";

import data from "./data";
import "../src/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data.products],
      sortdata: "default",
      filterData: [],
      cart: [],
      isCartOpen: "false"
    };
  }

  addToCart = item => {
    if (this.state.cart.length) {
      var itemQuantIncresed = false;
      let cartClone = this.state.cart;
      cartClone.forEach(prod => {
        if (prod.id === item.id) {
          prod.quantity++;
          itemQuantIncresed = true;
        }
      });
      if (!itemQuantIncresed) {
        cartClone.push({ ...item, quantity: 1 });
      }

      this.setState({ cart: cartClone });
    } else {
      this.setState({ cart: [{ ...item, quantity: 1 }] });
    }
  };
  //delete item from cart
  deleteItem = item => {
    let delCart = Object.assign([], this.state.cart);
    delCart.splice(item, 1);
    this.setState({ cart: delCart });
  };
  // decrese quantity
  decreaseQuantity = item => {
    let cartProd = this.state.cart;
    cartProd.find(prod => {
      if (prod.id === item.id) {
        if (prod.quantity > 1) {
          return (prod.quantity = prod.quantity - 1);
        }
      }
    });
    this.setState({ cart: cartProd });
  };
  addQuantity = item => {
    let cartProd = this.state.cart;
    cartProd.find(prod => {
      if (prod.id === item.id) {
        prod.quantity = prod.quantity + 1;
      }
    });
    this.setState({ cart: cartProd });
  };

  sizeFilter = size => {
    // console.log("handle", size);
    // const filterData = this.state.data.filter(singleData => {
    //   return singleData.availableSizes.includes(size);
    // });
    // console.log(filterData);
    // this.setState({ filterData: filterData });
    if (!this.state.filterData.includes(size)) {
      this.setState({
        filterData: [...this.state.filterData, size]
      });
    }
  };

  handleFilter = () => {
    let filterClone = this.state.data;
    return filterClone.filter(item => {
      return this.state.filterData.some(size =>
        item.availableSizes.includes(size)
      );
    });
  };

  changeState = event => {
    this.setState({ sortdata: event.target.value });
    this.handleSort();
  };

  manageCart = () => {
    this.setState(
      {
        isCartOpen: !this.state.isCartOpen
      },
      () => console.log(this.state.isCartOpen)
    );
  };

  handleSort = () => {
    switch (this.state.sortdata) {
      case "default":
        this.setState({
          data: [...data.products]
        });
        break;
      case "low-to-high":
        this.setState({
          data: this.sortBy()
        });
        break;
      case "high-to-low":
        this.setState({
          data: this.sortBy().reverse()
        });
        break;
      default:
        this.setState({
          data: [...data.products]
        });
    }
  };

  sortBy = () => {
    return this.state.data.sort((a, b) => {
      return b.price - a.price;
    });
  };

  handleSubmit = event => {
    alert("Ordered Successfully");
    event.preventDefault();
  };

  render() {
    const { data, filterData } = this.state;
    const myList = filterData.length ? this.handleFilter() : data;
    console.log(myList);

    return (
      <>
        <div className="wrapper">
          <div className="top-header">
            <span className="sixteenprods">
              {myList.length} Product(s)found
            </span>
            <div className="select-options">
              <p>Order By</p>
              <select onChange={this.changeState}>
                <option value="default">Select</option>
                <option value="low-to-high">Lowest To Highest</option>
                <option value="high-to-low">Highest To Lowest</option>
              </select>
            </div>
          </div>
          <div className="main">
            <div className="filter">
              <h3 className="sizes">Sizes:</h3>
              <div className="flexyfilter">
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("XS");
                      }}
                    ></input>
                    <span className="checkmark">XS</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="S"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("S");
                      }}
                    ></input>
                    <span className="checkmark">S</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="M"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("M");
                      }}
                    ></input>
                    <span className="checkmark">M</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="ML"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("ML");
                      }}
                    ></input>
                    <span className="checkmark">ML</span>
                  </label>
                </div>
              </div>
              <div className="flexyfilter">
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="L"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("L");
                      }}
                    ></input>
                    <span className="checkmark">L</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XL"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("XL");
                      }}
                    ></input>
                    <span className="checkmark">XL</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XXL"
                      className="filter-flex-input"
                      onClick={() => {
                        this.sizeFilter("XXL");
                      }}
                    ></input>
                    <span className="checkmark">XXL</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex">
              {myList.map(item => (
                <div className="flex1">
                  <img
                    className="item-images"
                    src={`static/products/${item.sku}_1.jpg`}
                    alt=""
                  />
                  <div className="free-box">
                    <h4 className="free-shipping">Free Shippping</h4>
                  </div>
                  <div className="price-details">
                    <h2 className="description">{item.title}</h2>
                    <hr className="tiny-hr"></hr>
                    <h4 className="real-price">
                      <span className="price">{item.currencyFormat}</span>
                      <span className="the-highlighted-price">
                        {item.price}
                      </span>
                    </h4>

                    <h4 className="another-price">
                      <span className="price2">or {item.installments}</span>
                      <span className="other-half">x$1.21</span>
                    </h4>
                    <button
                      onClick={() => this.addToCart(item)}
                      className="addtocart"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* cart */}
        <div>
          <div
            className={this.state.isCartOpen ? "cart-section" : "close-cart"}
          >
            <span className="quantities" onClick={this.manageCart}>
              <img src="static/bag-icon.png" alt="cart-icon"></img>
              <span className="quantities-content">
                {this.state.cart.length}
              </span>
            </span>
            <div className={this.state.isCartOpen ? "sho-cart" : ""}>
              <div className="close-cart-button" onClick={this.manageCart}>
                X
              </div>
              <div className="cart-content">
                <div className="cart-header">
                  <span className="bag">
                    <img src="static/bag-icon.png" alt="cart-icon"></img>
                    <span className="bag-quantity">
                      {this.state.cart.length}
                    </span>
                  </span>
                  <span className="header-title">CART</span>
                </div>

                {/* mapp items  */}
                {this.state.cart.map(item => (
                  <div className="cart-items">
                    <div className="selected-items-box">
                      <div className="delete-item"></div>
                      <div className="selected-items-image">
                        <img
                          src={`static/products/${item.sku}_1.jpg`}
                          alt={item.title}
                          className="item-image"
                        ></img>
                      </div>
                      <div className="selected-items-details">
                        <p className="items-title">{item.title}</p>
                        <p className="description">
                          {item.availableSizes[0]} | {item.style} <br />
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="selected-items-price">
                        <p>${item.price * item.quantity}</p>
                        <div>
                          <button
                            className="decrease-item-btn"
                            onClick={() => this.decreaseQuantity(item)}
                          >
                            -
                          </button>
                          <button
                            className="increase-item-btn"
                            onClick={() => this.addQuantity(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* cart-footer */}
                <div className="cart-footer">
                  <p className="cart-total">
                    <span className="subs">SUBTOTAL:</span>
                    <span className="the-amount">
                      $.
                      {this.state.cart.reduce(
                        (acc, item) => acc + item.price + item.quantity,
                        0
                      )}
                    </span>
                  </p>
                  <div className="cart-total-price">
                    {/* <p className="cart-total-price-value">$45.45</p> */}
                    {/* <small className="cart-total-price-installment">
                      <span>OR UPTO 9 X $ 2.34</span>
                    </small> */}
                  </div>
                  <div className="cart-buy-btn">
                    <button onClick={this.handleSubmit} className="checkout">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
