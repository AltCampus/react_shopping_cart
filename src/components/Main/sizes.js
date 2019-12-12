import React from "react";

const Sizes = (props) => {
  return (
    <div className="sizes_container">
      <p className="sizes_text">Sizes:</p>
      <div className="all_sizes">
        <div className="size" onClick={()=>props.filteredData("XS")}>XS</div>
        <div className="size" onClick={()=>props.filteredData("S")}>S</div>
        <div className="size" onClick={()=>props.filteredData("M")}>M</div>
        <div className="size" onClick={()=>props.filteredData("ML")}>ML</div>
        <div className="size" onClick={()=>props.filteredData("L")}>L</div>
        <div className="size" onClick={()=>props.filteredData("XL")}>XL</div>
        <div className="size" onClick={()=>props.filteredData("XXL")}>XXL</div>
      </div>
    </div>
  );
};

export default Sizes;
