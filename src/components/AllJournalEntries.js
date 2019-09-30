import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteJournalEntry} from '../actions/deleteJournalEntry'

const AllJournalEntries = (props) => {

  const handleDelete = (journalEntry) => {
    props.deleteJournalEntry(journalEntry.id)
  }

  return (
    <div>
      { 
        [...props.journalEntries].reverse().map(journalEntry => 
          <div key={journalEntry.id}> 
            <Link to={`/journals/${journalEntry.id}`}>
              {journalEntry.content}
            </Link>
            <button onClick={() => handleDelete(journalEntry)}>
              Delete Entry
            </button>
          </div>
        )
      }                
    </div>
  )
}

export default connect(null, {deleteJournalEntry})(AllJournalEntries)