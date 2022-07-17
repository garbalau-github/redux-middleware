import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './state/countReducer';

const myLogger = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  console.log('-- Middleware');
  return next(action);
};

const store = createStore(countReducer, applyMiddleware(myLogger));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
