import React, {Component} from 'react';
import {shallow} from 'enzyme';
import { Counter } from '../components/counter.jsx';
import { expect} from 'chai';

describe('counter component tests', () => {
    it('should render counter', () => {
            let wrapper = shallow(<Counter/>);
            expect(wrapper.contains([
                "add",
            ])).to.equal(true);
        }
    );
})
