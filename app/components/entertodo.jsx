import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

//todo at least 1 default class
export default class EnterTodo extends Component {

    addTodo(name){
         store.dispatch({type: 'ADD',text:name});
    }

    render() {

        return (<div>
                <input id="name" type="text"/>
                <button  onClick={() => this.addTodo(document.getElementById('name').value)}>add todo</button>

            </div>
        );
    }

}