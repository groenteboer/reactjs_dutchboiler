import {Provider} from 'react-redux';
import {createStore} from 'redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';

import reducer from './components/reducers';

const store = createStore(reducer);

import Cart from './components/cart';

const App = () => (
    <Provider store ={store}>
        <div>
            <Cart></Cart>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
