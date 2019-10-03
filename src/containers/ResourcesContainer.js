import React from 'react'
import { connect } from 'react-redux'
import {fetchResources} from '../actions/fetchResources'
import ResourceInput from '../components/resources/ResourceInput'

class ResourcesContainer extends React.Component {

  componentDidMount(){
    this.props.fetchResources()
  }

  render(){
    return (
      <div>
        <ResourceInput />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps, {fetchResources})(ResourcesContainer)