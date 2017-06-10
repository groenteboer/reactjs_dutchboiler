import React, {Component} from 'react';

export class DivDiv extends Component {
    render() {
        return (

            <div id="parentDiv" className="bg">
                <div className="row childDiv ">
                    <div className="col-md-6">
                        <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvElQPvE4mpefl9D6qy2BmBsD2UCbKdJbn2I1kkpFRaTDoLhb2g" alt=""/></div>
                    <div className="col-md-6">two</div>
                </div>
            </div>
        );
    }
}

export default DivDiv;