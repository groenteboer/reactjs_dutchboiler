import ReactDOM from 'react-dom';
import React from 'react';
import {Hello} from './components/hello.jsx'; //todo remember to put component in curly brackets when importing
import {Hero} from './components/hero.jsx';
import {Kid} from './components/kid.jsx';

import './css/boiler.css';

ReactDOM.render(<div> <Hero/><Kid/>  </div>, document.getElementById('root'));