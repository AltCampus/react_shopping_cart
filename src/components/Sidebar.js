import { useSelector } from "react-redux";

function Sidebar(props) {
  const products = useSelector((state) => state.product.products)

  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let uniqueSizes = [...new Set(sizes)];

  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span className="size" key={size} onClick={() => props.handleBySize(size)}>{size}</span>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
