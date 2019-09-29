import React from 'react';
import {Link} from 'react-router-dom'

const AllJournalEntries = (props) => {

  return (
    <div>
      { 
        [...props.journalEntries].reverse().map(journalEntry => 
          <div key={journalEntry.id}> 
            <Link to={`/journals/${journalEntry.id}`}>
              {journalEntry.content}
            </Link>
          </div>
        )
      }                
    </div>
  )
}

export default AllJournalEntries;