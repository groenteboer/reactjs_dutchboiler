import React, {Component} from 'react';

export class Flex extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="item double">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                </div>
                <div className="wrapper">
                    <div className=" item square">6</div>
                </div>
                <div className="wrapper">
                    <div className="item double">7</div>
                    <div className="item">8</div>
                    <div className="item">9</div>
                    <div className="item">10</div>
                    <div className="item">11</div>
                </div>
            </div>
        );
    }
}

export default Flex;