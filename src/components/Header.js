import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "select"
    };
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
    this.props.handleSort(value);
  };

  render() {
    return (
      <div className="header">
        <div>16 Product(s) found</div>
        <div>
          <span>Order By</span>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="select">Select</option>
            <option value="lowToHigh">Lowest to highest</option>
            <option value="highToLow">Highest to lowest</option>
          </select>
        </div>
      </div>
    );
  }
}
