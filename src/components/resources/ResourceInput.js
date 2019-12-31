import React from 'react'
import { connect } from 'react-redux'
import { addResource } from '../../actions/addResource'
import { Row, Form, Button } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

class ResourceInput extends React.Component {

  state = {
    title: '',
    description: '',
    url: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value    
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addResource(this.state)
    this.setState = ({
      title: '',
      description: '',
      url: ''  
    })
    this.props.history.push('/resources');
  }

  render(){
    return (
      <RowStyles>
        <ButtonStyles>
          <TextStyles>

            <Row className='left-justified-row-form'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formTitle'>
                  <Form.Label>
                    Add a Resource
                  </Form.Label>
                  <br></br>
                  <Form.Control
                    type='text' 
                    placeholder='Title' 
                    onChange={e => this.handleChange(e)}
                    name='title'
                    value={this.state.title}
                  />
                </Form.Group>

                <Form.Group controlId='formDescription'>
                  <Form.Control
                    as='textarea' 
                    rows='3'
                    cols='110' 
                    type='textarea'
                    placeholder='Description' 
                    onChange={e => this.handleChange(e)}
                    name='description'
                    value={this.state.description}    
                  />
                </Form.Group>
                
                <Form.Group controlId='formURL'>
                  <Form.Control
                    type='textarea' 
                    placeholder='Website URL (Web Address)' 
                    onChange={e => this.handleChange(e)}
                    name='url'
                    value={this.state.url} 
                  />
                  <Form.Text>                
                    Copy the entire URL of the website (ex. "www.example.com" or "example.com") and paste it here.
                  </Form.Text>
                </Form.Group>

                <Button type='submit' className='btn-submit'>
                  Submit
                </Button>
                
              </Form>
            </Row>

          </TextStyles>
        </ButtonStyles> 
      </RowStyles>
    )
  }
}

export default connect(null, {addResource})(ResourceInput)