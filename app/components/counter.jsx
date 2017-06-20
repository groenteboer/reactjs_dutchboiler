import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export class Counter extends Component {


    increment() {
         store.dispatch({type: 'INC'});
    }

    decrement() {
        store.dispatch({type: 'DEC'});
    }

    render() {
        return (<div>
                {this.props.counter}
                <button  onClick={() => this.increment()} >add</button>
                <button  onClick={() => this.decrement()} >subtract</button>

            </div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        counter: store
    }
}

export default connect(mapStateToProps)(Counter)