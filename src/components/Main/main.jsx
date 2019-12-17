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
      product: [...Data.products],
      view: "default",
      filterdata: []
    };
  }

  //delete cart item

  handleDelete = id => {
    this.setState({ cart: this.state.cart.filter(item => item.id !== id) });
  };

  //increment cart itenm

  handleIncrement = id => {
    let cloneCart = this.state.cart;
    cloneCart.forEach(item => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      this.setState({ cart: cloneCart });
    });
  };

  //decrement cart item

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

  //add products to cart

  addToCart = data => {
    if (this.state.cart.length) {
      var addedProduct = false;
      var cartClone = this.state.cart;

      cartClone.forEach(product => {
        if (product.id === data.id) {
          product.quantity++;
          addedProduct = true;
        }
      });

      if (addedProduct === false) {
        cartClone.push({ ...data, quantity: 1 });
      }
      this.setState({ cart: cartClone });
    } else {
      this.setState({ cart: [{ ...data, quantity: 1 }] });
    }
  };

  // change view

  changeState = event => {
    this.setState({ view: event.target.value }, () => this.handleView());
  };

  //sort by Price

  sortLowToHigh = () => {
    let sorted = [...this.state.product].sort((val1, val2) => {
      return val1.price - val2.price;
    });
    return sorted;
  };

  sortHighToLow = () => {
    let sorted = [...this.state.product].sort((val1, val2) => {
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
        filterdata: this.state.filterdata.filter(itemSize => {
          return itemSize !== size;
        })
      });
    }
  };

  filter = () => {
   const data = this.state.product;
   return data.filter(product => {
     return this.state.filterdata.some(size => (
       product.availableSizes.includes(size)
     ))
   })
  };

  // hendle view

  handleView = () => {
    switch (this.state.view) {
      case "default":
        this.setState({ product: [...Data.products] });
        break;
      case "lowToHight":
        console.log("lowtohigh");
        this.setState({ product: this.sortLowToHigh() });
        break;
      case "highToLow":
        this.setState({ product: this.sortHighToLow() });
        break;
      case "filtered":
        this.setState({ product: this.filterData() });
        break;
      default:
        this.setState({ product: [...Data.products] });
    }
  };

  render() {
    let dataToFilter = this.state.filterdata.length
      ? this.filter()
      : this.state.product;
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
