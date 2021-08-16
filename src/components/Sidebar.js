import { connect } from 'react-redux';

function Sidebar(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <aside className='flex-20 sidebar'>
      <div className='flex wrap'>
        {uniqueSizes.map((size) => (
          <span className='size' key={size}>
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(Sidebar);
