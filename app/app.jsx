import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1>Hello lo</h1>
    }
}

class Bye extends React.Component {
    render() {
        return <h1>Bye yo</h1>
    }
}
ReactDOM.render(<div><Hello/><Bye/></div> , document.getElementById('root'));