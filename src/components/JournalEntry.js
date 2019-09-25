import React from 'react'

const JournalEntry = (props) => {

  return (
    <div>
      {props.journalEntry.content}
    </div>
  )
}

export default JournalEntry;