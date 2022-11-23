import { useDispatch, useSelector } from "react-redux";
import selectSize from "../store/actions";
function Sidebar({ products }) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];

  const dispatch = useDispatch();
  const sizesState = useSelector((state) => state.sizes);

  const handleClick = (size) => {
    dispatch(selectSize(size));
  };

  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size, index) => (
          <span
            key={index}
            className={`size ${sizesState.includes(size) ? "active" : ""}`}
            onClick={() => handleClick(size)}
          >
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
