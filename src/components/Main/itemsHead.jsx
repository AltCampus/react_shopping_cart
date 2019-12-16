import React from 'react';


const Head = (props) => {
  return(
    <div className="products_count_container">
<div className="products_count">{props.data.length ? props.data.length : "16"} product{props.data.length === 1 ? "" : "(s)"} found</div>
    <div>
      <span className="order_by">Order by</span>
      <select className="select_by_category" onChange={props.changeState}>
        <option value="default" > Select </option>
        <option value="lowToHight" >Lowest to highest</option>
        <option value="highToLow">Highest to Lowest</option>
      </select>
    </div>
  </div>
  )
}

export default Head;