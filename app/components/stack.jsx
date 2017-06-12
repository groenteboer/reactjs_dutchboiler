import React, {Component} from 'react';


//todo https://stackoverflow.com/questions/44488072/how-to-handle-scrollbar-wrapping

export class Stack extends Component {

    populateJournal() {
        const j = [{'title':'one','date':'12/03/17','entry':'Y'}];
        let journalEntries ='';

        for (var i = 0; i < j.length; i++) {
//todo remove
debugger;
            journalEntries +=
                '<div><h3>' + j[i].title + '-' + j[i].date +'</h3><p>' + j[i].entry +'</p> </div>';

        }
        
        //todo remove
        console.log('testing journalEntries',journalEntries);

        return (<div>{journalEntries}</div>)
    }


    render() {
        let journal =[];

            journal =this.populateJournal();
        return (<div dangerouslySetInnerHTML={{__html: journal}}/>)
    }

}


export default Stack;