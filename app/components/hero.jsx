import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Hero extends Component {

    constructor(props, context) {
        super(props, context);

        this.toggle = this.toggle.bind(this);
        this.state = { open: false }
    }

    toggle() {
        console.log('toggle');
        this.setState({ open:!this.state.open});
        console.log(this.state.open);
    }

    render() {
        return (
            <div className='header'>
                <Button onClick={this.toggle.bind(this)}>Click this</Button>
                <div className={this.state.open ? 'open' :'close'}>
                    show me
               </div>
               <div>
                   some text : dont push me down
               </div>


            </div>
        );
    }
}

export default Hero;