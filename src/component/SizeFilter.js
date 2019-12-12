import React from "react";

function SizeFilter() {
  return (
    <>
      <div className="filter">
        <h3 className="sizes">Sizes:</h3>
        <div className="flexyfilter">
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">XS</span>
            </label>
          </div>
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">S</span>
            </label>
          </div>
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">M</span>
            </label>
          </div>
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">ML</span>
            </label>
          </div>
        </div>
        <div className="flexyfilter">
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">L</span>
            </label>
          </div>
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">XL</span>
            </label>
          </div>
          <div className="filter-flex">
            <label>
              <input
                type="checkbox"
                value="XS"
                className="filter-flex-input"
              ></input>
              <span className="checkmark">XXL</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeFilter;
