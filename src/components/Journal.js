import React from 'react';


const Journal = (props) => {

    return (
      <div>
        <h2>Your Journal</h2>
        <br></br>
          <JournalContainer />
        <div>
          {/* Returns all entries, including newest one */}
        </div>
      </div>
    )
  }

export default Journal;