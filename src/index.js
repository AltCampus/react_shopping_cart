import React from "react";
import { render } from "react-dom";
import data from "./data";

import "../src/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data.products],
      sortdata: "default"
    };
  }

  changeState = event => {
    this.setState({ sortdata: event.target.value });
    this.handleSort();
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

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="top-header">
            <span className="sixteenprods">16 Product(s)found</span>
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
                    ></input>
                    <span className="checkmark">XS</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-flex-input"
                    ></input>
                    <span className="checkmark">S</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-flex-input"
                    ></input>
                    <span className="checkmark">M</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-flex-input"
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
                      value="XS"
                      className="filter-flex-input"
                    ></input>
                    <span className="checkmark">L</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-flex-input"
                    ></input>
                    <span className="checkmark">XL</span>
                  </label>
                </div>
                <div className="filter-flex">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-flex-input"
                    ></input>
                    <span className="checkmark">XXL</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex">
              {this.state.data.map(item => (
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
                    <button className="addtocart">Add To Cart</button>
                  </div>
                </div>
              ))}
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
