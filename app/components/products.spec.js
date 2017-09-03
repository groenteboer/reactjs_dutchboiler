import React, {Component} from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Products from './products';

describe('', () => {
    it('should render ...', () => {
            let props = {products: {cart: [{name: 'dsadasdsa'}]}};

            let wrapper = shallow(<Products {...props}/>);
            
            console.log('wrapper.debug()=',wrapper.debug());
            expect(wrapper.contains([
                "test",
            ])).to.equal(true);
        }
    );
});
