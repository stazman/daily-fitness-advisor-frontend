import React from 'react';
import JournalEntry from './JournalEntry'

const AllJournalEntries = (props) => {

    return (
      <div>
        <div>
          { 
            props.journalEntries.map(journalEntry => 
              <li key={journalEntry.id}> 
                <JournalEntry journalEntry={journalEntry} />
              </li>
            )
          }
        </div>
      </div>
    )
  }

export default AllJournalEntries;