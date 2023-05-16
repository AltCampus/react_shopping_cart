import OrderBy from "./OrderBy";
import { connect } from "react-redux";
import { handleAddCart } from "../store/action";

function Products (props) {
  const handleOrderProducts = (order,size, products) => {
    let sortedProducts = [...products];
    if(size){
      sortedProducts = sortedProducts.filter((p) => {
        return p.availableSizes.includes(size)
    })
    }
    if (order === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

    let products = handleOrderProducts(props.selectedOrder,props.size, props.data);

    return (
      <div>
        <div className="products-filter">
          <p>
            {`${products.length} Product${
              products.length > 1 ? "s" : ""
            } found.`}{" "}
          </p>
          <OrderBy
          />
        </div>
        <div className="flex wrap">
          {products.map((product) => (
            <Product key={product.id} product={product} cart={props.cart} dispatch={props.dispatch}/>
          ))}
        </div>
      </div>
    );
}

function Product(props) {
  let {product,cart,dispatch}=props
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${product.sku}_1.jpg`}
        alt={product.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{product.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {product.currencyFormat + product.price}
        </h3>
        <button onClick={()=>dispatch(handleAddCart(product,cart))}>Add To Cart</button>
      </div>
    </div>
  );
}
export default connect((state)=>{
  return {
    selectedOrder:state.selectedOrder,
    size:state.size,
    cart:state.cart
  }
})(Products);
