import React from 'react';

const Journal = (props) => {

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

export default Journal;