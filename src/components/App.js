import React, {Component} from 'react'
import '../App.css'
import {Route} from 'react-router-dom'
import NavBar from './NavBar'
import Advisor from './advisor/Advisor'
import TrackerHome from './trackers/TrackerHome'
import JournalHome from './journal/JournalHome'
import JournalContainer from '../containers/JournalContainer'
import ResourceHome from './resources/ResourceHome'
import ResourcesContainer from '../containers/ResourcesContainer'
import CommunityHome from './community/CommunityHome'

class App extends Component {
  render(){
    return (
      <React.Fragment>
      <NavBar />
        {
          <Route 
            exact path='/' 
            component={Advisor}
          />
        }
        {
          <Route 
            exact path='/tracker_home' 
            component={TrackerHome}
          />
        }
        {
          <Route 
            exact path='/journal_home' 
            component={JournalHome}
          />
        }
        {
          <Route 
            exact path='/resource_home' 
            component={ResourceHome}
            //(Rather than a button on the bottom of the screen, may go in a dropdown with login, settings links/buttons)
          />
        }
        {
          <Route 
            exact path='/community_home' 
            component={CommunityHome}
          />
        }

      <div className="App">
        <JournalContainer />
        <ResourcesContainer />

        {/* AdvisorContainer
        TrackerContainer
          WeightLossTrackerContainer (Has form for new weighing, current weight, weight history)
          HabitTracker (Shows Record of Habits for week, month, etc.)
        ResourcesContainer
          CommentsContainer
        CommunityContainer
          CommunityLinksContainer
          CommentsContainer */}
      </div>
      </React.Fragment>
    )
  }
}
export default App
