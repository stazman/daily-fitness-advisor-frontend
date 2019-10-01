import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addJournalEntry} from '../../actions/addJournalEntry'
import {
	withRouter
} from 'react-router-dom';


class JournalInput extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJournalEntry(this.state);
    this.setState({
      content: ''
    })
    this.props.history.push('/journals');
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a Journal Entry:</label>
          <br></br><br></br>
          <input
            type='textarea'
            placeholder='New Entry'
            onChange={e => this.handleChange(e)}
            value={this.state.content}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addJournalEntry})(JournalInput);