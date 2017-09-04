import React, {Component} from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Products from './products';

describe('products', () => {
    it('should display property ie name', () => {
            let props = {products: {cart: [{name: 'test'}]}};

            let wrapper = shallow(<Products {...props}/>);

            console.log('wrapper.debug()=',wrapper.debug());
            expect(wrapper.contains([
                "test",
            ])).to.equal(true);
        }
    );
});
