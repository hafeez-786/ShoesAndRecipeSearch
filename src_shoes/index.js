import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import cartReducer from './Component/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));