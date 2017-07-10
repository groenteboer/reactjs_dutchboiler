import React from 'react';

class Main extends React.Component {

    render() {
        console.log(this.props.children);
        return (
            <div>
                <h1>Main</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Main;