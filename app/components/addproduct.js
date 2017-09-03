import React, {Component} from 'react';

export default class AddProduct extends Component {

     constructor(props) {
             super();
             this.props = props;
             this.state = {product:''}
         }


    handleAddproduct = () => {
         
        console.log('ref=',this.refs.name.value);

        this.props.addProduct(this.refs.name.value);


    }

    render() {

        return (<div>
                <input type="text" ref="name" /> <button onClick={this.handleAddproduct}>add product</button>
            </div>
        );
    }

}
