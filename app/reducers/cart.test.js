
import React, { Component } from 'react';
import  cart from '../reducers/cart';

test('reducer cart testing', () => {

    expect(cart([], { type: 'ADD' })).toHaveLength(1);
});