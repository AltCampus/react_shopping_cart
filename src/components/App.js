import React from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { products } from "../data.json";

function App() {
  return (
    <div className="wrapper flex space-between">
      <Sidebar products={products} />
      <Main products={products} />
      <Cart />
    </div>
  );
}

export default App;
