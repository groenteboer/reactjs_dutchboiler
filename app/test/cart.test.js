import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { Products } from '../components/products.jsx';

let props;
beforeEach(() => {

    props = [
        {
            id: 1,
            name: 'apples',
            price: 12
        },
        {
            id: 2,
            name: 'pears',
            price: 20
        }
    ]
});
test('show products', () => {

    const wrapper = shallow(
        <Products products={props}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});