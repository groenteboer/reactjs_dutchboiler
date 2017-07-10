import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import { getTotal } from '../reducers/cart';

export class Cart extends Component {

    render() {
        console.log('cart');

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
                ------------------------CART:<br/>
                total price:${display}

                {this.props.total}


            </div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        cart: store,
        total:getTotal(store)
    }
}

export default connect(mapStateToProps)(Cart)