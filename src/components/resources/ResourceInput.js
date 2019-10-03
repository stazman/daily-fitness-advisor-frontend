import React from 'react'
import { connect } from 'react-redux'
import {addResource} from '../../actions/addResource'

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
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a Resource</label>
        <br></br><br></br>
        <input 
          type='text' 
          placeholder='Title' 
          onChange={e => this.handleChange(e)}
          name='title'
          value={this.state.title}
        />
        <br></br><br></br>
        <input 
          type='textarea' 
          placeholder='Description' 
          onChange={e => this.handleChange(e)}
          name='description'
          value={this.state.description}
        />
        <br></br><br></br>
        <input 
          type='textarea' 
          placeholder='Website URL' 
          onChange={e => this.handleChange(e)}
          name='url'
          value={this.state.url}
        />
        <br></br><br></br>
        <input type='submit' />
      </form>
    )
  }
}

export default connect(null, {addResource})(ResourceInput)