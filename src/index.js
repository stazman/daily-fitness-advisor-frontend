import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import manageJournal from './reducers/manageJournal';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

let store = createStore(manageJournal);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);