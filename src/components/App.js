import React from 'react';
import Cart from './Cart';
import Main from './Main';
import Sidebar from './Sidebar';

import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <div className='wrapper flex space-between'>
      <Provider store={store}>
        <Sidebar />
        <Main />
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
