import React, {Component} from 'react';


//todo  https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects

export class Array_render extends Component {

    render() {
        var stations = [
            {call: 'station one', frequency: '000'},
            {call: 'station two', frequency: '001'}
        ];


        //inject as property
        const Test = ({stations}) => (
            <div>
                {stations.map(station => (
                    <div className="station" key={station.call}>{station.call}</div>
                ))}
            </div>
        );

        return (<div><Test stations={stations}></Test></div>);
    }

}


export default Array_render;