import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default class Products extends Component {

    render() {
        //todo remove
        debugger;
        let display

        if (this.props.products.cart) {
            display = this.props.products.cart.map
            (
                (pr) => (
                    <p> {pr.name}!</p>
                )
            )
        }

        return (<div>
                {display}
            </div>
        );
    }

}
