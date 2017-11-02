import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

import MockData from '../json/stuff.json'

export default class  extends Component {

    //calculate most recent price
    getData = () =>
    {
        //call api
        //axios('api/to webserice')

        // work response
        let result = _.get(MockData,'chart.result');

        console.log('result=',result);

    }

    render() {
        return (<div>

            </div>
        );
    }
}
