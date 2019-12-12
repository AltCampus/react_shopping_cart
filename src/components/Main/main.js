import React from "react";

import Sizes from "./sizes";
import Items from "./items";
import Head from "./itemsHead";
import Cart from "../cart";
import Data from "../../data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      Order: [...Data.products],
      view: "default",
      filterData: []
    };
  }

  addToCart = data => {
    this.setState({ cart: this.state.cart.concat(data) });
  };
  changeState = event => {
    this.setState({ view: event.target.value });
    this.handleView();
  };
  sortData = () => {
    return this.state.Order.sort((val1, val2) => {
      return val2.price - val1.price;
    });
  };
  filterData = size => {
    console.log(size);
    let filteredArr = this.state.Order.filter(item =>
      item.availableSizes.some(filtered => filtered === size)
    );
    this.setState({
      filterData: this.state.filterData.concat(filteredArr),
      view: "filtered"
    });
  };

  handleView = () => {
    switch (this.state.view) {
      case "default":
        this.setState({ Order: [...Data.products] });
        break;
      case "lowToHight":
        this.setState({ Order: this.sortData() });
        break;
      case "highToLow":
        this.setState({ order: this.sortData().reverse() });
        break;
      case "filtered":
        this.setState({ order: this.filterData() });
        break;
      default:
        this.setState({ Order: [...Data.products] });
    }
  };

  render() {
    return (
      <main className="main">
        <Sizes filteredData={this.filterData} />
        <div className="Items_container">
          <Head changeState={this.changeState} />
          <div className="products_container">
            {this.state.filterData.length
              ? this.state.filterData.map(item => <Items {...item} />)
              : this.state.Order.map(item2 => (
                  <Items {...item2} addtocart={this.addToCart} />
                ))}
          </div>
        </div>
        <Cart cartValue={this.state.cart} />
      </main>
    );
  }
}

export default Main;
