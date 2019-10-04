import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import manageJournal from './reducers/manageJournal'
import manageResources from './reducers/manageResources'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  manageJournal,
  manageResources
})

let store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)