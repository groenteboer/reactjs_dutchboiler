import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Todos} from '../components/todos.jsx';

import {expect_this} from 'chai';

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

test('when clicked complete todo', () => {

    let list =[
        {
            id: 1,
            name: 'oje',
            completed: false
        },
        {
            id: 12,
            name: 'two',
            completed: true
        }
    ];

    const wrapper = shallow(
        <Todos todos={list}>
        </Todos>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});

