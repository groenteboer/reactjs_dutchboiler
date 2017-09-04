import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default class AddProduct extends Component {

    constructor(props) {
        super();
        this.props = props;
        //todo remove
        debugger;
    }

    handleClick = () => {
        this.props.addProduct(this.refs.waarde.value);
    }

    render() {
        return (<div>
                <input type="text" ref="waarde"/>
                <button onClick={this.handleClick}>add</button>s
            </div>
        );
    }

}
