import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export  class Products extends Component {


    addToCart(p) {
         store.dispatch({type: 'ADD',object:p});
    }

    render() {

        let display;

        if (this.props.products) {
            //todo remove
            debugger;
            display = this.props.products.map
            (
                (product) => (
                    <p> {product.name} - price:$ {product.price} <button onClick={() => this.addToCart(product)}>add to cart</button></p>
                )
            )

        }

        return (<div>
                PRODUCTS:
                {display}


            </div>
        );
    }

}

const mapStateToProps = function (store) {
    //todo remove
    debugger;
    return {
        products: store
    }
}

export default connect(mapStateToProps)(Products)