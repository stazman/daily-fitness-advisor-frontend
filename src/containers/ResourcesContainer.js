import React, {Component} from 'react';
import fetchResources from '../actions/fetchResources'


class ResourcesContainer extends Component {

  componentDidMount(){
    fetchResources()
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}

export default ResourcesContainer