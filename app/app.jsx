import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import { createStore } from 'redux';
import reducer from './components/reducers'
import Cart from './components/cart'

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <div>
          <Cart></Cart>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
