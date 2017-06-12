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
                 j[i].title + '-' + j[i].date +'</h3><p>' + j[i].entry +'</p> </div>';

        }

        //todo remove
        console.log('testing journalEntries',journalEntries);

        return journalEntries;
    }


    render() {
        //let journals =this.state.journal;
        let journals = [{'title':'one','date':'12/03/17','entry':'Y'}];

        const display =(journals) => (
            <div>
                {journals.map(journal => (
                    <div>
                        <h3>{journal.title} - {journal.date}</h3>
                        <p>{journal.entry}</p>
                    </div>
                    ))}
            </div>
        );

        return display;
    }

}


export default Stack;