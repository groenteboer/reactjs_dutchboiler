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
        let result = _.get(MockData,'chart.result');

        console.log('result=',result[0].indicators.quote);

    }

    render() {
        this.getData();
        return (<div>

            </div>
        );
    }
}
