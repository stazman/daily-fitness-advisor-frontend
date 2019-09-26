import React from 'react'

const JournalEntry = (props) => {

  let journalEntry = props.journalEntries[props.match.params.id - 1];

  return (
    <li>
      {journalEntry ? journalEntry.content : null}
    </li>
  )
}

export default JournalEntry;