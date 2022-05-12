import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/action';

import OrderBy from './OrderBy';

class Products extends React.Component {
  handleOrderProducts = (order, products, sizes) => {
    let sortedProducts = [...products];

    if (sizes.length) {
      sortedProducts = sortedProducts.filter((p) => {
        if (sizes.filter((size) => p.availableSizes.includes(size)).length) {
          return p;
        }
        return null;
      });
    }

    if (order === 'highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === 'lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };
  render() {
    let { selectedOrder, selectedSize } = this.props.state;
    let products = this.handleOrderProducts(
      selectedOrder,
      this.props.data,
      selectedSize
    );

    return (
      <div>
        <div className='products-filter'>
          <p>
            {`${products.length} Product${
              this.props.data.length > 1 ? 's' : ''
            } found.`}{' '}
          </p>
          <OrderBy />
        </div>
        <div className='flex wrap'>
          {products.map((product, i) => (
            <Product key={i} product={product} state={this.props} />
          ))}
        </div>
      </div>
    );
  }
}

function Product(props) {
  function addItem() {
    props.state.dispatch(addToCart(props.product));
  }
  return (
    <div className='product-item'>
      <div className='product-label'>
        {props.product.isFreeShipping ? 'Free Shipping' : null}
      </div>
      <img
        className='product-item-img'
        src={`/static/products/${props.product.sku}_1.jpg`}
        alt={props.product.title}
      />
      <div className='product-item-details'>
        <p className='product-item-title'>{props.product.title}</p>
        <div className='line'></div>
        <h3 className='product-item-price'>
          {props.product.currencyFormat + props.product.price}
        </h3>
        <button onClick={addItem}>Add To Cart</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Products);
