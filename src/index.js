import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './style/index.css';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

import { Provider } from 'react-redux';
import store from './store';

render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
