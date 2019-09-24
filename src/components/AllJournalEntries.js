import React from 'react';

const AllJournalEntries = (props) => {

    return (
      <div>
        <div>
          { 
            props.journalEntries.map(journalEntry => 
              <li key={journalEntry.id}> 
                {journalEntry.content} 
              </li>
            )
          }
        </div>
      </div>
    )
  }

export default AllJournalEntries;