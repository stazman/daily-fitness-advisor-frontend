import React from 'react'
import { connect } from 'react-redux'
import { addResource } from '../../actions/addResource'
import { Row, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { device } from '../styles/device'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    label.form-label {
      font-size: 3.6rem;
    }
    textarea {
      font-size: 2.8rem;
    }
    small.form-text {
      font-size: 2.4rem;
    }
    button.btn-submit {
      font-size: 2.7rem;
    }    
  }

  @media ${device.mobileM} {
    label.form-label {
      font-size: 3.8rem;
    }
  }
  
  @media ${device.mobileL} {
    label.form-label {
      font-size: 4.2rem;
    }
    textarea {
      font-size: 3rem;
    }
    small.form-text {
      font-size: 2.4rem;
    }
    button.btn-submit {
      font-size: 3rem;
    }    
  }

  @media ${device.tabletS} {
    label.form-label {
      font-size: 4.4rem;
    }
    textarea {
      font-size: 3rem;
    }
    small.form-text {
      font-size: 2.5rem;
      line-height: 115%;
    }
    button.btn-submit {
      font-size: 3.2rem;
    }    
  }
  
  @media ${device.tabletL} {
    label.form-label {
      font-size: 4.8rem;
    }
    textarea {
      font-size: 3.2rem;
    }
    small.form-text {
      font-size: 2.75rem;
      line-height: 120%;
    }
    button.btn-submit {
      font-size: 3.4rem;
    }    
  }

  @media ${device.laptop} {
    textarea {
      font-size: 5rem;
    }
    small.form-text {
      font-size: 2.8rem;
    }
    button.btn-submit {
      font-size: 3.6rem;
    }        
  }

  @media ${device.laptopL} {
    button.btn-submit {
      font-size: 3.8rem;
    }
    small.form-text {
      line-height: 130%;
    }     
  }

  @media ${device.desktop} {
    label.form-label {
      font-size: 6.4rem;
    }
    small.form-text {
      font-size: 3.6rem;
    }
    button.btn-submit {
      font-size: 5rem;
    }            
  }
`

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
      <MediaQueries>
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
                      as='textarea' 
                      type='textarea'
                      rows='1'
                      cols='110'
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
                      as='textarea' 
                      type='textarea'
                      rows='1'
                      cols='110'
                      placeholder='Website URL' 
                      onChange={e => this.handleChange(e)}
                      name='url'
                      value={this.state.url} 
                    />
                    <br></br>

                    <Form.Text>                
                      Copy the entire URL of the website (the web address at the top of the website) and paste it above
                    </Form.Text>
                  </Form.Group>
                  <br></br><br></br>

                  <Button type='submit' className='btn-submit'>
                    Submit
                  </Button>
                  
                </Form>
              </Row>

            </TextStyles>
          </ButtonStyles> 
        </RowStyles>
      </MediaQueries>
    )
  }
}

export default connect(null, {addResource})(ResourceInput)