import store from './store';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import {Todos} from './components/todos.jsx';
import './css/test.css';

ReactDOM.render(<div className="container" store={store}> <Todos/>  </div>, document.getElementById('root'));