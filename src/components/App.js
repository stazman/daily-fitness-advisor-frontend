import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './NavBar.js'
import Journal from './Journal.js'

function App() {
  return (
    <Router>
      <React.Fragment>
      <NavBar />
        {
          <Route 
            exact path='/journal' 
            component={Journal}
          />
        }
        <div className="App">
        </div>
        </React.Fragment>
    </Router>
  );
}

export default App;
