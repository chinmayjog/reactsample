import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// react component
import App from './App';
import SimpleComponent from './components/simplecomponent';
 import ProductFormComponent from './components/productcomponent/productformcomponent';
import * as serviceWorker from './serviceWorker';

const message = 'Hi from Index';
// the rendering of the Component
ReactDOM.render(
  <React.StrictMode>
    <ProductFormComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
