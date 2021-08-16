import { connect } from 'react-redux';

function OrderBy(props) {
  return (
    <div className='sort'>
      Order by
      <select
        value={props.selectedOrder}
        onChange={(event) => {
          props.dispatch({ type: 'handleOrderBy', payload: { event } });
        }}
      >
        <option value=''>Select</option>
        <option value='lowest'>Lowest to highest</option>
        <option value='highest'>Highest to lowest</option>
      </select>
    </div>
  );
}

export default connect()(OrderBy);
