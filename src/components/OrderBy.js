import React from 'react';
import { connect } from 'react-redux';
import { handleSelectedOrder } from '../store/action';

function OrderBy(props) {
  function handleSelecte(event) {
    props.dispatch(handleSelectedOrder(event.target.value));
  }
  return (
    <div className='sort'>
      Order by
      <select value={props.state.selectedOrder} onChange={handleSelecte}>
        <option value=''>Select</option>
        <option value='lowest'>Lowest to highest</option>
        <option value='highest'>Highest to lowest</option>
      </select>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(OrderBy);
