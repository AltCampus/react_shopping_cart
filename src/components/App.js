import { useEffect, useState } from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function App() {
  const [availableSizes, setAvailableSizes] = useState([])
  const data = useSelector((state) => state.product.products)
  const [products, setProducts] = useState([...data])
  const [selectedOrder, setSelectedOrder] = useState('')



  useEffect(() => {
    let updated = data.filter((product) => {
      for (let size of availableSizes) {
        if (product.availableSizes.includes(size)) {
          return true
        }
      }
    })
    if (updated.length > 0) {
      setProducts([...updated])
    }
  }, [availableSizes])


  const handleBySize = (size) => {
    setAvailableSizes(prevState => {
      if (prevState.includes(size)) {
        return prevState.filter(s => s !== size)
      } else {
        return [...prevState, size]
      }
    })
  }

  const handleOrderBy = (event) => {
    setSelectedOrder(event.target.value)
    event.target.value === 'highest' ?
      setProducts(prevState => prevState.sort((a, b) => b.price - a.price))
      :
      setProducts(prevState => prevState.sort((a, b) => a.price - b.price))
  };

  return (
    <div className="wrapper flex space-between">

      <Sidebar handleBySize={handleBySize} />
      <Main data={products} selectedOrder={selectedOrder} handleOrderBy={handleOrderBy} />
      <Cart />
    </div>
  );
}

export default App;
