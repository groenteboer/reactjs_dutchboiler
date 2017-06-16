import React, {Component} from 'react';
import store from '../store';

export class EnterTodo extends Component {

    addTodo(val) {
        //todo remove
        console.log('testing addtodo');

        //todo remove
        debugger;

        //dispatch action
        store.dispatch({type: 'ADD_TODO', text:val });

    }

    render() {
        return (<div>
                <input id="name"  type="text"/>
                <button onClick={() => this.addTodo(document.getElementById('name').value)}>add</button>
            </div>
        );
    }

}

export default EnterTodo;