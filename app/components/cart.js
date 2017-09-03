import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddProduct from './addproduct';
import Products from './products';
import { bindActionCreators } from 'redux'
import * as AddActions from './actions/addaction'

const Cart = ({products, actions}) => (
    <div>
        hello
        {/*<AddProduct addProduct={actions.addProduct()}></AddProduct>*/}
        {/*<Products products={products}></Products>*/}
    </div>
)

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AddActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
