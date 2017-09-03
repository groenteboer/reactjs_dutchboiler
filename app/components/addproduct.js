import React, {Component} from 'react';

export default class AddProduct extends Component {

     constructor(props) {
             super();
             this.props = props;
             this.state = {product:''}
         }


    handleAddproduct = () => {



    }

    render() {

        return (<div>
                <input type="text" value={this.state.product}/> <button onClick="this.handleAddproduct">add product</button>
            </div>
        );
    }

}
