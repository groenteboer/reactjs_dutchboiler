import React, {Component} from 'react';
import cart from '../reducers/cart';
import {totalPrice} from '../reducers/cart';
import { getTotal } from '../reducers/cart';

describe('reducer cart', () => {

    test('should have lenght 1', () => {
        expect(cart([], {type: 'ADD'})).toHaveLength(1);
    });

    test('should add item', () => {

        let res = cart([], {
            type: 'ADD', object: {
                id: 2,
                name: 'pears',
                price: 20
            }
        });

        //console.log('res=', res)

        expect(res[0].name).toBe('pears');
    });


    xtest('should up the price ', () => {
        expect(totalPrice).toBe(11);
    });

    test('gettotal should equal sum', () => {

        let state = [
            {
                id: 1,
                name: 'apples',
                price: 12
            }];
        expect( getTotal(state)).toBe(112);
    });
    
    


})
