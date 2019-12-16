import React from "react";

import Product from "./Product.js";

export default function Products({ data }) {
  return (
    <ul className="container">
      {data.map(product => (
        <Product {...product} />
      ))}
    </ul>
  );
}
