import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Todos} from '../components/todos.jsx';

test('show todos', () => {

    const wrapper = shallow(
        <Todos>

        </Todos>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});

test('show 2 todos', () => {

    let todos = [
        {
            id: 1,
            name: 'one',
            completed: false
        },
        {
            id: 2,
            name: 'two',
            completed: false
        }];

    const wrapper = shallow(fdsafsdfds
        <Todos todos={todos}>
        </Todos>
    );

    console.log('wrapper.debug()=',wrapper.debug())

    expect(toJson(wrapper)).toMatchSnapshot();

});