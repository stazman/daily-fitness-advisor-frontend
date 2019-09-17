import React, {Component} from 'react'

class JournalInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJournalEntry(this.state);
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
              onChange={e => this.handleChange(e)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default JournalInput;