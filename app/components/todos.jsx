import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Todos extends Component {

    render() {
        
        //todo remove
        console.log('testing this.props.todos',this.props.todos);

        //todo remove
        //debugger;
        return (<div>hello from todos</div>
        );
    }

}

const mapStateToProps = function (store) {
    //todo remove
    //todo remove
    debugger;
    console.log('testing here in mapstatetoprops:store.todos',store.todos);
    return {
        todos: store.todos
    }
}

//todo how to handle export?
export default connect(mapStateToProps)(Todos)