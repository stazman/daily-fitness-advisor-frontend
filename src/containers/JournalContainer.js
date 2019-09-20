import React, {Component} from 'react';
import {connect} from 'react-redux'
import JournalInput from '../components/JournalInput';
import Journal from '../components/Journal';

class JournalContainer extends Component {

  render(){
    return (
      <div>
        <JournalInput />
        <Journal />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    journalEntries: state.journalEntries
  }

}

export default connect (mapStateToProps)(JournalContainer);