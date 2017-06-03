import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Hello} from './hello';

test('if am then return goodmorning', () => {

    const wrapper = shallow(
        <Hello timeofday="am">
            <strong>Hello World!</strong>
        </Hello>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});