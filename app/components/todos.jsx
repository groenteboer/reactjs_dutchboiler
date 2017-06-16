import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Todos extends Component {

    render() {
        
        //todo remove
        console.log('testing this.props.todos',this.props.todos);

        //todo remove
        debugger;
        return (<div>hello from todos</div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        todos: store.todos
    }
}

export default connect(mapStateToProps)(Todos)