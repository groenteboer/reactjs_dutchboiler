import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';


export class Todos extends Component {

    complete(val){

 store.dispatch({type: 'TOGGLE',text:val});
    }

    render() {

        let display='';

        if (this.props.todos) {
            display = this.props.todos.map
            (
                (todo) => (
                    <p className={todo.completed ? 'strikethrough' :''}  onClick={() => this.complete(todo.name)}> {todo.name}!</p>
                )
            )
        }
        return (<div>
                {display}
            </div>
        );
    }

}

const mapStateToProps = function (store) {

    console.log('store from todos=', store)
    return {
        todos: store
    }
}

export default connect(mapStateToProps)(Todos)