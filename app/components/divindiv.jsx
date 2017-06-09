import React, {Component} from 'react';

export class DivDiv extends Component {
    render() {
        return (

            <div id="parentDiv" className="bg">
                <div className="row childDiv ">
                    <div className="col-md-6">one</div>
                    <div className="col-md-6">two</div>
                </div>
            </div>
        );
    }
}

export default DivDiv;