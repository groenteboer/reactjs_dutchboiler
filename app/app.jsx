import ReactDOM from 'react-dom';
import React from 'react';
import {Hello} from './components/hello.jsx'; //todo remember to put component in curly brackets when importing
import {Hero} from './components/hero.jsx';

//todo get sass loader working
//import './scss/app.scss';

//import 'bootstrap/dist/css/bootstrap.css';


import './css/bootstrap.css';

ReactDOM.render(<Hero/>, document.getElementById('root'));