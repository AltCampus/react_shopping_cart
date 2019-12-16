import React from "react";
import Sidebar from "./sidebar";

export function CartIcon(props) {
  return (
    <div className="bag" onClick={props.handleClick}>
      <img src="/static/bag-icon.png" />
      <span>5</span>
    </div>
  );
}

export default class FloatCart extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  changeOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
  render() {
    return (
      <div className="float-cart">
        <CartIcon handleClick={this.changeOpen} />
        {this.state.isOpen ? <Sidebar /> : ""}
      </div>
    );
  }
}
