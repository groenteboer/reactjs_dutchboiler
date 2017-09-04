import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as addActions from './actions/addproduct'
import AddProduct from './addproduct';
import Products from  './product';

export class Cart extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div>

                <AddProduct addProduct={this.props.actions.addProduct}></AddProduct>
                <Products products={this.props.products}></Products>

            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(addActions, dispatch)
})

const mapStateToProps = function (store) {
    return {
        products: store
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
