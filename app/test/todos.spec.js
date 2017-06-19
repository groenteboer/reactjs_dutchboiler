import React, {Component} from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Todos} from '../components/todos.jsx';


test('show todos length 2', () => {

    let list =[
        {
            id: 1,
            name: 'oje',
            completed: false
        }];
    const wrapper = shallow(
        <Todos todos={list}>
        </Todos>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

});
//
// test('when clicked complete todo', () => {
//
//     let list =[
//         {
//             id: 1,
//             name: 'oje',
//             completed: false
//         },
//         {
//             id: 12,
//             name: 'two',
//             completed: true
//         }
//     ];
//
//     const wrapper = shallow(
//         <Todos todos={list}>
//         </Todos>
//     );
//
//     expect(toJson(wrapper)).toMatchSnapshot();
//
// });


// test('whether contains className', () => {
//
//     let list = [
//         {
//             id: 12,
//             name: 'two',
//             completed: true
//         }
//     ];
//
//     const wrapper = render(
//         <Todos todos={list}>
//         </Todos>
//     );
//
//    console.log('console=',wrapper.val())
//     expect(wrapper.text()).toMatch(/strikethrough/);
// });


xtest('should have a certain style set or contain a class on an element', () => {
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
    const wrapper = shallow(<Todos todos={list} />);
    console.log('console=',wrapper.find('strikethrough'))
    expect(wrapper.find('strikethrough')).toHaveLength(1);
});
