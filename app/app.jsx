import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import Todos from './components/todos.jsx';
import './css/test.css';
import EnterTodo from "./components/enter_todo.jsx";


const App = () => (
    <Provider store={store}>
       <div>
           <Todos />
           <EnterTodo/>
       </div>
    </Provider>
);

ReactDOM.render(
   <App/>
    , document.getElementById('root'));
