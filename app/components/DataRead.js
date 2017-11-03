import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import lodash from 'lodash'

import MockData from '../json/stuff.json'

export default class  extends Component {

    //calculate most recent price
    getData = () =>
    {
        //call api
        //axios('api/to webserice')

        // work response
        let result = _.get(MockData,'chart');

        //todo remove
        debugger;

        console.log('result=',result.result[0].indicators.quote[0].close[0]);

    }

    render() {
        //todo poll this:
        let lastestPrice = this.getData();

        console.log('lastestPrice=',lastestPrice);

        return (<div>

            </div>
        );
    }
}
