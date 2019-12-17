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
      order: [...Data.products],
      view: "default",
      filterdata: []
    };
  }

  handleDelete = id => {
    this.setState({ cart: this.state.cart.filter(item => item.id !== id) });
  };

  handleIncrement = id => {
    var cloneCart = this.state.cart;
    cloneCart.forEach(item => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      this.setState({ cart: cloneCart });
    });
  };

  handleDecrement = id => {
    var cloneCart = this.state.cart;
    cloneCart.forEach(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
        }
      }
      this.setState({ cart: cloneCart });
    });
  };

  addToCart = data => {
    if (this.state.cart.length) {
      var flag = false;
      var cartClone = this.state.cart;
      console.log(this.state.filterdata,"try data here")

      cartClone.forEach(obj => {
        if (obj.id === data.id) {
          obj.quantity++;
          flag = true;
        }
      });

      if (flag === false) {
        cartClone.push({ ...data, quantity: 1 });
      }

      this.setState({ cart: cartClone });
    } else {
      this.setState({ cart: [{ ...data, quantity: 1 }] });
    }
  };

  changeState = event => {
    this.setState({ view: event.target.value }, () => this.handleView());
  };
  sortLowToHigh = () => {
    let sorted = [...this.state.order].sort((val1, val2) => {
      return val1.price - val2.price;
    });
    return sorted;
  };
  sortHighToLow = () => {
    let sorted = [...this.state.order].sort((val1, val2) => {
      return val2.price - val1.price;
    });
    return sorted;
  };

  // filter products


  filterData = size => {

    if (!this.state.filterdata.includes(size)) {
      this.setState({ filterdata: [...this.state.filterdata, size] });
    } else {
      this.setState({
        filterdata: this.state.filterdata.filter(itemSize => itemSize !== size)
      });
    }
  };

  filter = () => {
    const data = this.state.order;
    return data.filter(item => {
      return this.state.filterdata.some(size =>
        item.availableSizes.includes(size)
      );
    });
  };

  // hendle view
  

  handleView = () => {
    switch (this.state.view) {
      case "default":
        this.setState({ order: [...Data.products] });
        break;
      case "lowToHight":
        console.log("lowtohigh");
        this.setState({ order: this.sortLowToHigh() });
        break;
      case "highToLow":
        this.setState({ order: this.sortHighToLow() });
        break;
      case "filtered":
        this.setState({ order: this.filterData() });
        break;
      default:
        this.setState({ order: [...Data.products] });
    }
  };

  render() {
    let dataToFilter = this.state.filterdata.length
      ? this.filter()
      : this.state.order;
    return (
      <main className="main">
        <Sizes
          filteredData={this.filterData}
          selectedSizes={this.state.filterdata}
        />
        <div className="Items_container">
          <Head changeState={this.changeState} data={this.state.filterdata} />
          <div className="products_container">
            {dataToFilter.map(item => (
              <Items item={item} addtocart={this.addToCart} />
            ))}
          </div>
        </div>
        <Cart
          cartValue={this.state.cart}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}

export default Main;
