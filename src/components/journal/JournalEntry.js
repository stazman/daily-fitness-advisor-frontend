import React from 'react'
import {Redirect} from 'react-router-dom'

const JournalEntry = (props) => {

  let journalEntry = props.journalEntries[props.match.params.id - 1];

  return (
    <li>
      {journalEntry ? null : <Redirect to='/journals' />}
      {journalEntry ? journalEntry.content : null}
    </li>
  )
}

export default JournalEntry;