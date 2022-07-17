import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './state/countReducer';

// 1
const firstMiddleware = (store) => (next) => (action) => {
  console.log('firstMiddleware()');
  return next(action);
};

// 2
const secondMiddleware = (store) => (next) => (action) => {
  console.log('secondMiddleware()');
  return next(action);
};

// 3
const changeIncrementingBehaviour = (store) => (next) => (action) => {
  console.log('changeIncrementingBehaviour');
  console.log('---------------------------');

  // Change behaviour
  if (store.getState() >= 10) {
    // I can modify Action properties, or send updated Object
    return next({ type: 'DECREMENT' });
  }
  return next(action);
};

const store = createStore(
  countReducer,
  applyMiddleware(
    firstMiddleware,
    secondMiddleware,
    changeIncrementingBehaviour
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
