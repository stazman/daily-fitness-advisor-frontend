import React, {Component} from 'react';
import JournalInput from './JournalInput'

class Journal extends Component {
  render(){
    return (
      <div>
        <h2>Your Journal</h2>
        <br></br>
          <JournalInput />
        <br></br>
        <div>
          {/* Returns all entries, including newest one */}
        </div>
      </div>
    )
  }
}

export default Journal;