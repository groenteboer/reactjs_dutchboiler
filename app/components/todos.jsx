import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';


export class Todos extends Component {


    showComplete(){
        store.dispatch({type: 'SHOWCOMPLETE',text:''});

    }

    complete(val){

 store.dispatch({type: 'TOGGLE',text:val});
    }

    render() {

        let display='';

        if (this.props.todos) {
            //todo remove
            console.log('testing=this.props', this.props);
            display = this.props.todos.map
            (
                    (todo) => (

                        <p key={todo.id} className={todo.completed ? 'strikethrough' : ''}
                           onClick={() => this.complete(todo.name)}> {todo.name}!</p>
                    )

            )
        }
        return (<div>
                {display}
                <a href="#" onClick={() => this.showComplete()}>show completed</a>
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