import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

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


            </div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        cart: store
    }
}

export default connect(mapStateToProps)(Cart)