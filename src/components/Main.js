import Products from "./Products";

function Main(props) {
  return (
    <div className="main flex-80">
      <Products data={props.products} />
    </div>
  );
}

export default Main;
