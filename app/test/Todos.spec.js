import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todos from '../components/todos.jsx';

test('show todos', () => {

    const wrapper = shallow(
        <Todos props="">

        </Todos>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});