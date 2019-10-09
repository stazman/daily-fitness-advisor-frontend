import React, {Component} from 'react'
import '../App.css'
import {Route} from 'react-router-dom'
import TopNavbar from './TopNavbar'
import Advisor from './advisor/Advisor'
import TrackerHome from './trackers/TrackerHome'
import JournalHome from './journal/JournalHome'
import JournalContainer from '../containers/JournalContainer'
import ResourceHome from './resources/ResourceHome'
import ResourcesContainer from '../containers/ResourcesContainer'
import CommunityHome from './community/CommunityHome'
import BottomNavbar from './BottomNavbar'
import { Container } from 'react-bootstrap'

class App extends Component {
  render(){
    return (
      <>
      <style type="text/css">
        {`
          .flex-container {
            display: flex;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            flex-direction: column;
          }
          .row {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Container className='flex-container'>
        <TopNavbar />
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

        <BottomNavbar />
      </Container>
      </>
    )
  }
}
export default App
