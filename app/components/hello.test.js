import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Hello} from './hello';

test('if am then return goodmorning', () => {

    const wrapper = shallow(
        <Hello timeofday="am">
        </Hello>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});

test('if pm then return good evening', () => {

    const wrapper = shallow(
        <Hello timeofday="pm">
        </Hello>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});