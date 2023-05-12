import { connect } from "react-redux";
import { handleSize } from "../store/action";

function Sidebar(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span key={size} className={props.size===size?'size active':'size'} onClick={()=>props.dispatch(handleSize(size))}>{size}</span>
        ))}
      </div>
    </aside>
  );
}

export default connect((state)=>{
  return {size:state.size}
})(Sidebar);
