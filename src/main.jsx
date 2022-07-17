import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './state/countReducer';

// 3RD-Party Middleware
import logger from 'redux-logger';

// Middleware
const firstMiddleware = () => (next) => (action) => {
  return next(action);
};

const secondMiddleware = () => (next) => (action) => {
  return next(action);
};

const changeIncrementingBehaviour = (store) => (next) => (action) => {
  if (store.getState() >= 10) {
    return next({ type: 'DECREMENT' });
  }
  return next(action);
};
// Store
const store = createStore(
  countReducer,
  applyMiddleware(
    firstMiddleware,
    secondMiddleware,
    changeIncrementingBehaviour,
    logger
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
