import React from 'react';

export default class Hello extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        //todo remove
        console.log('testing props', props);
    }

    render() {
        let greet ;

        if (this.props) {
            greet= this.props.timeofday ==='am' ? 'morning' : 'evening'
        }
        return <h1>Good {greet}</h1>
    }
}