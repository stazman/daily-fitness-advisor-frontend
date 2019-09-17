import React, {Component} from 'react';
import JournalInput from './JournalInput'

class Journal extends Component {

  constructor(){
    super();
    this.state = {
      journalEntries: []
    }
  }

  fetchJournalEntries = () => {
    fetch('http://localhost:3001/api/v1/journals', {
      accept: 'application/json'
    })
    .then( res => res.json())
    .then(json => console.log(json))
  }


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

  componentDidMount() {
    this.fetchJournalEntries()
  }

}

export default Journal;