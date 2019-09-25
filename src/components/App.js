import React, {Component} from 'react';
import '../App.css';
import {Route} from 'react-router-dom';
import NavBar from './NavBar.js'
import Journal from './Journal.js'
import JournalContainer from '../containers/JournalContainer';

class App extends Component {
  render(){
    return (
      <React.Fragment>
      <NavBar />
        {
          <Route 
            exact path='/journal' 
            component={Journal}
          />
        }
      <div className="App">
        <JournalContainer />
      </div>
      </React.Fragment>
    );
  }
}
export default App;
