import React from "react";

const Sizes = (props) => {
  let selectedSizes = props.selectedSizes
  return (
    <div className="sizes_container">
      <p className="sizes_text">Sizes:</p>
      <div className="all_sizes">
        <div className={selectedSizes.includes('XS') ? `size black` :`size`} onClick={()=>props.filteredData("XS")}>XS</div>
        <div className={selectedSizes.includes('S') ? `size black` :`size`} onClick={()=>props.filteredData("S")}>S</div>
        <div className={selectedSizes.includes('M') ? `size black` :`size`} onClick={()=>props.filteredData("M")}>M</div>
        <div className={selectedSizes.includes("ML") ? `size black` :`size`} onClick={()=>props.filteredData("ML")}>ML</div>
        <div className={selectedSizes.includes("L") ? `size black` :`size`} onClick={()=>props.filteredData("L")}>L</div>
        <div className={selectedSizes.includes('XL') ? `size black` :`size`} onClick={()=>props.filteredData("XL")}>XL</div>
        <div className={selectedSizes.includes('XXL') ? `size black` :`size`} onClick={()=>props.filteredData("XXL")}>XXL</div>
      </div>
    </div>
  );
};

export default Sizes;
