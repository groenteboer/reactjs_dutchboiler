import React, {Component} from 'react';
import {shallow} from 'enzyme';
import { expect} from 'chai';
import NewCart from './newcart';

describe('Newcart testing', () => {
    it('should render da thingy', () => {
            let wrapper = shallow(<NewCart/>);
            expect(wrapper.contains([
                "this is newcart",
            ])).to.equal(true);
        }
    );

    it('should handleClick', () => {
        let wrapper = shallow(<NewCart/>);

        wrapper.find('button').simulate('click');

        expect(wrapper.state('tekst')).to.equal('hoera');

    });


});
