import React from "react";
import { connect } from "react-redux";
import OrderBy from "./OrderBy";

function Products(props) {
  function handleOrderBy({ target }) {
    let value = target.value;
    console.log(value, "value");
    if (value === "") {
      props.dispatch({ type: "" });
    }
    if (value === "highest") {
      props.dispatch({ type: "highest" });
    }
    if (value === "lowest") {
      props.dispatch({ type: "lowest" });
    }
  }
  let products = props.products;
  console.log(props.products.length);
  return (
    <div>
      <div className="products-filter">
        <p>
          {`${props.data.length} Product${
            props.data.length > 1 ? "s" : ""
          } found.`}{" "}
        </p>
        <OrderBy handleOrderBy={handleOrderBy} />
      </div>
      <div className="flex wrap">
        {products.map((product) => (
          <Product {...product} key={product.sku} />
        ))}
      </div>
    </div>
  );
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
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

function handleProducts(state) {
  return {
    products: state.products,
  };
}

export default connect(handleProducts)(Products);
