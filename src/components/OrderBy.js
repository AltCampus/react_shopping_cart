import { connect } from "react-redux";
import { handleOrderBy } from "../store/action";

function OrderBy(props) {
  return (
    <div className="sort">
      Order by
      <select value={props.selectedOrder} onChange={(e)=>props.dispatch(handleOrderBy(e))}>
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}

function mapToProps(state){
  return {selectedOrder:state.selectedOrder}
}

export default connect(mapToProps)(OrderBy);
