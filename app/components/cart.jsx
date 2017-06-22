import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import { getTotal } from '../reducers/cart';

export class Cart extends Component {

    render() {

        let display;

        if (this.props.products) {
            //todo remove
            debugger;
            display = this.props.products.map
            (
                (product) => (
                    <p> {product.name} - price:$ {product.price} </p>

                )
            )

        }

        return (<div>
                {display}

                {this.props.total}


            </div>
        );
    }

}

const mapStateToProps = function () {
    return {
        cart: store,
        total:getTotal(store)
    }
}

export default connect(mapStateToProps)(Cart)