import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default class NewCart extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {tekst: ''}
    }

    handleClick = () => {
        this.setState({tekst:'hoera'});
    }

    render() {


        return (<div >
                {this.state.tekst}
                <button onClick={this.handleClick}>go</button>
                this is newcart
            </div>
        );
    }

}
