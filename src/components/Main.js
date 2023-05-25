import Products from "./Products";

function Main(props) {

  return (
    <div className="main flex-80">
      <Products  {...props} />
    </div>
  );
}

export default Main;
