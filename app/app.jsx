import ReactDOM from 'react-dom';
import React from 'react';
import {Hello} from './components/hello.jsx'; //todo remember to put component in curly brackets when importing

//import './scss/app.scss';

ReactDOM.render(<Hello timeofday="am"/> , document.getElementById('root'));