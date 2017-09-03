import React, {Component} from 'react';

export default class Products extends Component {


    constructor(props) {
        super();
        this.props = props;
    }

    render() {

        console.log('this.props=', this.props);

        return (<div>
                this is products
            </div>
        );
    }

}
