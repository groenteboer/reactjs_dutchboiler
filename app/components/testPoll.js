// ES6

import React from 'react';
import asyncPoll from 'react-async-poll';

const WrappedComponent = () => {
	return <div>hoer</div>;
};

const onPollInterval = (props, dispatch) => {
	/*
	In this example, dispatch will return a Promise
	and then call this function again [intervalDuration]
	milliseconds later once the Promise has resolved
    */

    console.log('onPollinterval is called');
    return 1
	//return dispatch(getNewData(props.id));
};


/*
The first invocation of asyncPoll will return a function
that accepts only one argument: your component
*/
export default asyncPoll(10*1000, onPollInterval)(WrappedComponent);


//export default WrappedComponent