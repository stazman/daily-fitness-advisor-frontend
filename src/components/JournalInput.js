import React, {Component} from 'react'

class JournalInput extends Component {

  constructor(){
    super();
    this.state = {
      journalEntry: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      journalEntry: e.target.value
    })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    // this.props.addJournalEntry(this.state);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Add a Journal Entry
            </label>
            <br></br><br></br>
            <input
              type='textarea'
              placeholder='New Entry'
              onChange={e => this.handleChange(e)}
              //check not having to pass e here
              value={this.state.journalEntry}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default JournalInput;