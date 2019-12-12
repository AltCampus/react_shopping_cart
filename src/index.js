import React from "react";
import { render } from "react-dom";

import Items from "./component/Items";

import "../src/main.css";
import data from "./data.json";
import Header from "./component/Header";
import SizeFilter from "./component/SizeFilter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header />
          <div className="main">
            <SizeFilter />
            <div className="flex">
              {data.products.map(e => {
                return <Items {...e} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
