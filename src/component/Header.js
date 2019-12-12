import React from "react";
import Cart from "./Cart";

function Header() {
  return (
    <>
      <Cart />
      <div className="top-header">
        <span className="sixteenprods">16 Product(s)found</span>
        <div className="select-options">
          <p>Order By</p>
          <select>
            <option>Select</option>
            <option>Lowest To Highest</option>
            <option>Highest To Lowest</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Header;
