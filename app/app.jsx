if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import {Hello} from './components/hello.jsx'; //todo remember to put component in curly brackets when importing
import {Hero} from './components/hero.jsx';
import {Kid} from './components/kid.jsx';
import {HomeAway} from './components/homeaway.jsx';
import Sidebar from './components/sidebar.jsx';

import {MainSnack} from "./components/main_snack.jsx"

import './css/test.css';

import Array_render from './components/render_array.jsx';

ReactDOM.render(<div className="container"> <MainSnack/>  </div>, document.getElementById('root'));