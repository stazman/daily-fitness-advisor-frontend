import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchJournalEntries} from '../actions/fetchJournalEntries'
import JournalInput from '../components/JournalInput';
import Journal from '../components/Journal';

class JournalContainer extends Component {

  componentDidMount(){
    this.props.fetchJournalEntries()
  }

  render(){
    return (
      <div>
        <Journal />
        <JournalInput />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    journalEntries: state.journalEntries
  }

}

export default connect (mapStateToProps, {fetchJournalEntries})(JournalContainer);