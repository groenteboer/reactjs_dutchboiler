import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export  class Products extends Component {

    render() {

        let display;

        if (this.props.products) {
            //todo remove
            debugger;
            display = this.props.products.map
            (
                (product) => (
                    <p> {product.name}</p>
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
    //todo remove
    debugger;
    return {
        products: store
    }
}

export default connect(mapStateToProps)(Products)