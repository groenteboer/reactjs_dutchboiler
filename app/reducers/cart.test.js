
import React, { Component } from 'react';
import  cart from '../reducers/cart';

test('reducer cart testing', () => {

    expect(cart([], { type: 'ADD' })).toHaveLength(1);
});

test('reducer cart add item', () => {

    let res =cart([], { type: 'ADD',object:{
        id: 2,
        name: 'pears',
        price: 20
    }
    });
    
    console.log('res=',res)

    expect(res[0].name).toBe('pears');
});
