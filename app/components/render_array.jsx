import React, {Component} from 'react';


//todo  https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects

export class Array_render extends Component {

    render() {
        var stations = [
            {call: 'station one', frequency: '000'},
            {call: 'station two', frequency: '001'}
        ];

        const journals = [{'title':'one','date':'12/03/17','entry':'This is an entry'},
            {'title':'two','date':'14/03/17','entry':'This is another entry'}
        ];


        //inject as property
        const Test = ({journals}) => (
            <div>
                {journals.map(journal => (
                    <div>
                        <h3>{journal.title} - {journal.date}</h3>
                        <p>{journal.entry}</p>
                    </div>
                ))}
            </div>
        );

        return (<div><Test journals={journals}></Test></div>);
    }

}


export default Array_render;