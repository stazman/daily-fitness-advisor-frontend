import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchJournalEntries} from '../actions/fetchJournalEntries'
import JournalInput from '../components/JournalInput';
import AllJournalEntries from '../components/AllJournalEntries';


class JournalContainer extends Component {

  componentDidMount(){
    this.props.fetchJournalEntries()
  }

  render(){
    return (
      <div>
        <br></br>
        <Route 
          path='/journals/new'
          component={JournalInput}
        />
        <br></br><br></br><br></br>
        <Route
          exact path='/journals/'
          render={() => <AllJournalEntries journalEntries={this.props.journalEntries} />}
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