import React, {Component} from 'react';

export class Todos extends Component {

    render() {
        
        //todo remove
        console.log('testing this.props',this.props);

        return (<div></div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        todos: store.todos
    }
}

export default connect(mapStateToProps)(Todos)