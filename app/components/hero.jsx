import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Hero extends Component {

constructor(props, context) {
    super(props, context);
    
    this.toggle = this.toggle.bind(this);
}

toggle(){
    console.log('toggle');
    console.log('hahah');
}

    render() {
        return (
            <div>
               <Button onClick={this.toggle.bind(this)}></Button>

            </div>
        );
    }
}

export default Hero;