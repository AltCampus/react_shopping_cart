import React from "react";
import OrderBy from "./OrderBy";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrder: "",
    };
  }
  handleOrderBy = (event) => {
    this.setState({ selectedOrder: event.target.value });
  };

  handleOrderProducts = (order, sizes, products) => {
    let sortedProducts = [...products];
    if (sizes.length > 0) {
      sortedProducts = sortedProducts.filter((p) => {
        for (const size of sizes) {
          if (p.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }

    if (order === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  render() {
    let { selectedOrder } = this.state;
    let products = this.handleOrderProducts(
      selectedOrder,
      this.props.selectedSizes,
      this.props.data
    );

    return (
      <div>
        <div className="products-filter">
          <p>
            {`${products.length} Product${
              this.props.data.length > 1 ? "s" : ""
            } found.`}{" "}
          </p>
          <OrderBy
            selectedOrder={selectedOrder}
            handleOrderBy={this.handleOrderBy}
          />
        </div>
        <div className="flex wrap">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              handleAddToCart={this.props.handleAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button onClick={() => props.handleAddToCart(props)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default Products;
