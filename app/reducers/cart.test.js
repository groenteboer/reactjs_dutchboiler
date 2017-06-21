
import React, { Component } from 'react';
import  cart from '../reducers/cart';
import  { totalPrice } from '../reducers/cart';

 describe('reducer cart', () => {

     test('should have lenght 1', () => {
         expect(cart([], { type: 'ADD' })).toHaveLength(1);
     });

     test('should add item', () => {

         let res =cart([], { type: 'ADD',object:{
             id: 2,
             name: 'pears',
             price: 20
         }
         });

         console.log('res=',res)

         expect(res[0].name).toBe('pears');
     });


     test('should up the price ', () => {
         expect(totalPrice).toBe(11);
     });

 })
