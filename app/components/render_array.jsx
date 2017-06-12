import React, {Component} from 'react';


//todo  https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects

export class Array_render extends Component {

    render() {

        //const j = Object.values(this.state.journal);
        const j = [{'title': 'one', 'date': '12/03/17', 'entry': 'This is an entry'},
            {'title': 'two', 'date': '14/03/17', 'entry': 'This is another entry'}
        ];


        const Ding = //define property for variable
        ({items}) => (
                    <div>
                        {items.map(j => (
                            j.title
                        ))}
                    </div>
                );

        return (  <div><Ding items={j}/>  hello</div>
        );
    }

}


export default Array_render;