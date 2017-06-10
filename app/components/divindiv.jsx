import React, {Component} from 'react';

export class DivDiv extends Component {
    render() {
        return (

            <div id="parentDiv" className="col-lg-12 bg">

                <div className="childDiv">
                    <div className="col-lg-12 hidden-xs">
                        alleen lg
                        <img src="app/images/coca.png" className="img-responsive-lg" alt=""/>
                    </div>
                    <div className="col-xs-12 hidden-lg">
                        alleen xs
                        <img src="app/images/coca.png" className="img-responsive-xs" alt=""/>
                    </div>
                </div>

            </div>
        );
    }
}

export default DivDiv;