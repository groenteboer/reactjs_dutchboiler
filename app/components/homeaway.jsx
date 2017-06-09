import React, {Component} from 'react';
import styled from 'styled-components';

export class HomeAway extends Component {
    render() {


        return (
            <div className="container">
                <img className="col-lg-12 tileimage" src="./tile.jpg" alt=""/>
                <div className="col-lg-12 tileseven">
                    <div className="col-md-3">
                        <img className="" src="./logo.png" alt=""/>
                    </div>
                    <div className="col-md-9">
                        <p>this is some sfdsfds</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeAway;