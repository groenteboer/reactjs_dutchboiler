import store from './store.js';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Hero from './components/hero.jsx';
import Cart from './components/cart.jsx';
import Main from './components/main.jsx';
import  Greeting from './components/Greeting.jsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })


//


const App = () => (
    <Provider store={store}>
        <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={ Main }>
                {/*<IndexRoute component={ Greeting } />*/}
                <Route path="/cart" component={ Cart } />
                <Route path="/hero" component={ Hero } />
            </Route>
        </Router>

    </Provider>
);

ReactDOM.render(<App/>

    , document.getElementById('root'));
