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


test('should have strikethrough class present for completed todo', () => {
    let list =[
        {
            id: 1,
            name: 'one',
            completed: true
        }
    ];
    const wrapper = shallow(<Todos todos={list} />);

    console.log('console wrapper.debug()=',wrapper.debug())

    expect(wrapper.find('.strikethrough').exists()).toBe(true);
});
