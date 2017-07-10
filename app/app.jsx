import store from './store.js';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Hero from './components/hero.jsx';
import Cart from './components/cart.jsx';

//


const App = () => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            {/* add the routes here */}
            <Route path="/cart" component={Cart}/>
            <Route path="/hero" component={Hero}/>
        </Router>
    </Provider>
);

ReactDOM.render(<App/>

    , document.getElementById('root'));
