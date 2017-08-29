import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Repay from './components/repay.jsx';
import Counter from './components/counter.jsx';
import Gree from './components/greeting';

//


const App = () => (
    <Provider store={store}>
        <div>
           <Gree></Gree>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
