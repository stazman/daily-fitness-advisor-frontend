import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {addJournalEntry} from '../../actions/addJournalEntry'
import { Form, Button } from 'react-bootstrap'
import ButtonStyles from '../styles/ButtonStyles'
import FormStyles from '../styles/FormStyles'

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
      <FormStyles>
        <ButtonStyles>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='formJournalEntryl'>
              <Form.Label>Add a Journal Entry</Form.Label>
              <br></br>
              <Form.Control 
                as='textarea' 
                type='textarea'
                rows='6'
                placeholder='Write your journal entry here ...'
                onChange={e => this.handleChange(e)}
                value={this.state.content}
              />
              <Form.Text>                
                Keep note of your progress and thoughts!
              </Form.Text>
            </Form.Group>
            <Button className='btn-main' type='submit'>
              Submit
            </Button>
          </Form>
          
        </ButtonStyles>
      </FormStyles>
    )
  }
}

export default connect(null, {addJournalEntry})(JournalInput);