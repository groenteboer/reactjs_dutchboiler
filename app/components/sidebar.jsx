import React, {Component} from 'react';


//todo https://stackoverflow.com/questions/44488072/how-to-handle-scrollbar-wrapping

export class Sidebar extends Component {
    render() {
        return (

            <div className="">
                <div className="">
                    <div className="sidebar">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contacts</li>
                            <li>Monkeys</li>
                            <lI>Pigeons</lI>
                        </ul>
                    </div>

                    <div className="content">
                        <div>
                            <p>
                                We have got the best monkeys in entire europe.
                            </p>

                            <p>
                                We have also got some really good pigeons.
                            </p>

                            <p>
                                One pigeon scored more than 1500 in 2016 SAT exams.
                            </p>

                            <p>
                                The monkey was quite jealous of him to be honest.
                            </p>

                            <p>
                                But they are still besties so far... and will be forever
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Sidebar;