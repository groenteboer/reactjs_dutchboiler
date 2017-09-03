import React, {Component} from 'react';

export default class Products extends Component {


    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        let display;

        if (this.props.products.cart) {
             display = this.props.products.cart.map
            (
                (todo) => (
                    <p> {todo.name}!</p>
                )
            )
        }

        return <div> {display}</div>

    }

}
