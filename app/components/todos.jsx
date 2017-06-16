import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Todos extends Component {

    render() {

        //todo remove
        console.log('testing this.props.todos', this.props.todos);

        return (<div>
                todos: {this.props.todos.map
                                    (
                                        (todo) => (
                                            <p>Hello, {todo.name}!</p>
                                        )
                                    )}
            </div>
        );
    }

}

const mapStateToProps = function (store) {
    //todo remove
    console.log('testing here in mapstatetoprops:store.todos', store.todos);
    return {
        todos: store.todos
    }
}

//todo how to handle export?
export default connect(mapStateToProps)(Todos)


//todo https://stackoverflow.com/questions/44580303/why-isnt-my-state-correctly-mapped-to-props-in-redux#44580374