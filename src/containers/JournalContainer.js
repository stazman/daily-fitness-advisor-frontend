import React, {Component} from 'react';
import JournalInput from '../JournalInput';
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

export default JournalContainer;