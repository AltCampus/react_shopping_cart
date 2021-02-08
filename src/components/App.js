import React from 'react';
import Cart from './Cart';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='wrapper flex space-between'>
      <Sidebar />
      <Main />
      <Cart />
    </div>
  );
}

export default App;
