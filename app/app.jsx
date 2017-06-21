import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Products from './components/products.jsx';
import Cart from './components/cart.jsx';

//


const App = () => (
    <Provider store={store}>
        <div>
            <Products/>
            <Cart/>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
