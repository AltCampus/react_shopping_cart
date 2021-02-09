import Products from "./Products";

function Main(props) {
  return (
    <div className="main flex-80">
      <Products
        data={props.products}
        selectedSizes={props.selectedSizes}
        handleAddToCart={props.handleAddToCart}
      />
    </div>
  );
}

export default Main;
