import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Todos} from '../components/todos.jsx';

test('show todos length 2', () => {

    let list =[
        {
            id: 1,
            name: 'oje',
            completed: false
        },
        {
            id: 12,
            name: 'two',
            completed: false
        }
    ];
    const wrapper = shallow(
        <Todos todos={list}>

        </Todos>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});