import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export class Todos extends Component {

    complete(val) {
        //todo remove
        console.log('complete', val);
        store.dispatch({type: 'TOGGLE',name:val});
    }

    render() {
        let display;

        if (this.props.todos) {
            display = (this.props.todos.map
                (
                    (todo) => (
                        <p key={todo.name} className={todo.completed ? 'strikethrough' : ''} onClick={() => this.complete(todo.name)}>Hello, {todo.name}!</p>
                    )
                )
            );
        }

        //todo remove
        console.log('testing this.props.todos', this.props.todos);

        return (<div>
                todos: {display}
            </div>
        );
    }

}

const mapStateToProps = function (store) {
    //todo remove
    debugger;
    console.log('testing here in mapstatetoprops:store.todos', store);
    return {
        todos: store
    }
}

//todo how to handle export?
export default connect(mapStateToProps)(Todos)


//todo https://stackoverflow.com/questions/44580303/why-isnt-my-state-correctly-mapped-to-props-in-redux#44580374