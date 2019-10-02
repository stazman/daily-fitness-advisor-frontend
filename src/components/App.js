import React, {Component} from 'react';
import '../App.css';
import {Route} from 'react-router-dom';
import NavBar from './NavBar'
import Advisor from './advisor/Advisor'
import Trackers from './trackers/Trackers'
import Journal from './journal/Journal'
import JournalContainer from '../containers/JournalContainer';
import Resources from './resources/Resources'
import Community from './community/Community'

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
            exact path='/trackers' 
            component={Trackers}
          />
        }
        {
          <Route 
            exact path='/journal' 
            component={Journal}
          />
        }
        {
          <Route 
            exact path='/resource_home' 
            component={Resources}
            //(Rather than a button on the bottom of the screen, may go in a dropdown with login, settings links/buttons)
          />
        }
        {
          <Route 
            exact path='/community' 
            component={Community}
          />
        }

      <div className="App">
        <JournalContainer />
        {/* AdvisorContainer
        TrackerContainer
          WeightLossTrackerContainer (Has form for new weighing, current weight, weight history)
          HabitTracker (Shows Record of Habits for week, month, etc.)
        ResourceContainer
          CommentsContainer
        CommunityContainer
          CommunityLinksContainer
          CommentsContainer */}
      </div>
      </React.Fragment>
    );
  }
}
export default App
