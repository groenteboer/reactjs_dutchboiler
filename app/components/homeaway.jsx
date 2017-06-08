import React, {Component} from 'react';
import styled from 'styled-components';

export class HomeAway extends Component {
    render() {

        const Div = styled.div`
	border-radius: 3px;
	padding: 0.25em 1em;
	top:400px;
	margin: 0 1em;
	background: transparent;
	opacity:
	color: black;
	border: 22px solid palevioletred;

`


        return (
            <div className="container">
                <img className="col-lg-12 tileimage" src="./tile.jpg" alt=""/>
                <div className="col-lg-12 tileseven">
                    <div className="col-md-3">
                        <img className="" src="./logo.png" alt=""/>
                    </div>
                    <div className="col-md-9">
                        <p>this is some text</p>
                    </div>
                </div>
            </div>
                );
                }
                }

                export default HomeAway;