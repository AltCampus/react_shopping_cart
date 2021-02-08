import OrderBy from './OrderBy';
import { products } from '../data.json';
import Products from './Products';

function Main() {
  return (
    <div className='main flex-80'>
      <Products data={products} />
    </div>
  );
}

export default Main;
