import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';



// const App = () => (
//     <Provider store={store}>
//        <div>
//           hello
//        </div>
//     </Provider>
// );

ReactDOM.render(
<div>hello</div>
    , document.getElementById('root'));
