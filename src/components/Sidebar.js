import React from 'react';
import { connect } from 'react-redux';
import { handleSelectedSize } from '../store/action';

function Sidebar(props) {
  function handleSize(val) {
    props.dispatch(handleSelectedSize(val));
  }

  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <aside className='flex-20 sidebar'>
      <div className='flex wrap'>
        {uniqueSizes.map((size) => (
          <span
            key={size}
            className={
              props.state.selectedSize.includes(size) ? 'active size' : 'size'
            }
            onClick={() => handleSize(size)}
          >
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Sidebar);
