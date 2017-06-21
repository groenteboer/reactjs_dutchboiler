
import React, { Component } from 'react';
import  cart from '../reducers/cart';

test('reducer cart', () => {

    expect(cart([], { type: 'ADD' })).toHaveLength(1);
});