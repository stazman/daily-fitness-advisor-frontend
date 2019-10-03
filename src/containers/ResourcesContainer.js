import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchResources} from '../actions/fetchResources'


class ResourcesContainer extends Component {

  componentDidMount(){
    this.props.fetchResources()
  }

  render(){
    return (
      <div>
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