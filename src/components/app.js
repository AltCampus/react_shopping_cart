import React, { Component } from "react";

import Products from "./Products";
import data from "../data.json";
import Header from "./Header";
import FloatCart from "./FloatCart";

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filterKind: "",
      filteredProducts: []
    };
  }

  sortProduct = type => {
    let sorted = this.state.products;
    switch (type) {
      case "lowToHigh":
        sorted = [...this.state.products].sort((a, b) => a.price - b.price);
        this.setState({ filteredProducts: sorted });
        break;
      case "highToLow":
        sorted = [...this.state.products].sort((a, b) => b.price - a.price);
        this.setState({ filteredProducts: sorted });
        break;
      default:
        this.setState({ filteredProducts: sorted });
        break;
    }
  };

  componentDidMount() {
    this.setState({ products: data.products, filteredProducts: data.products });
  }

  render() {
    let { products, filteredProducts } = this.state;
    return (
      <>
        <main>
          <Filter data={products} />
          <div
            style={{
              width: "85%"
            }}
          >
            <Header handleSort={this.sortProduct} />
            <Products data={filteredProducts} />
          </div>
        </main>
        <FloatCart />
      </>
    );
  }
}

function Filter({ data }) {
  let sizes = Array.from(
    new Set(
      data.reduce((acc, cv) => {
        return acc.concat(cv.availableSizes);
      }, [])
    )
  );

  return (
    <div className="filters">
      <h3>Sizes:</h3>
      <ul>{sizes && sizes.map(size => <li>{size}</li>)}</ul>
    </div>
  );
}
