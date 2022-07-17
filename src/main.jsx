import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './state/countReducer';

// Middleware
const myLogger = (store) => {
  return (next) => {
    return (action) => {
      // We have access to action object, before it goes to Reducer
      console.log(action);
      console.log(store.getState());

      // Pass object (modified) to next Middleware or to Reducer directly
      return next(action);
    };
  };
};

const store = createStore(countReducer, applyMiddleware(myLogger));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
