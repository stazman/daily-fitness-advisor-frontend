import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchJournalEntries} from '../actions/fetchJournalEntries'
import JournalInput from '../components/JournalInput';
import AllJournalEntries from '../components/AllJournalEntries';
import JournalEntry from '../components/JournalEntry'


class JournalContainer extends Component {

  componentDidMount(){
    this.props.fetchJournalEntries()
  }

  render(){
    return (
      <div>
        <Route 
          exact path='/journals/new'
          component={JournalInput}
        />
        <Route 
          exact path='/journals/:id'
          render={(routerProps) => <JournalEntry {...routerProps} journalEntries={this.props.journalEntries} />}
        />
        <Route
          exact path='/journals/'
          render={(routerProps) => <AllJournalEntries {...routerProps} journalEntries={this.props.journalEntries} />}
        />
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