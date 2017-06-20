import React, {Component} from 'react';
import {shallow} from 'enzyme';
import { Counter } from '../components/counter.jsx';

describe('counter component tests', () => {
    test('add button should be there', () => {

        const wrapper = shallow(
            <Counter/>
        );

        console.log('wrapper.debug()=', wrapper.debug())
        expect(wrapper.text()).toMatch(/add/)

    });
})
