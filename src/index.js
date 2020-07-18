import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import root_reducer from './store/reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(root_reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);