import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Todos from "./components/todos.jsx";
import EnterTodo from "./components/entertodo.jsx";



const App = () => (
    <Provider store={store}>
        <div>
            <EnterTodo/>
            <Todos/>

        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
