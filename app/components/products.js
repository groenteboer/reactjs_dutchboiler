import React, {Component} from 'react';;

export default class Products extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        let display;

        if (this.props.products.cart) {
            console.log('this.props.products=',this.props.products);
             display = this.props.products.cart.map
            (
                (todo,i) => (
                    <p key={i}> {todo.name}</p>
                )
            )
        }
        return <div> {display}</div>
    }

}
