import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteJournalEntry } from '../../actions/deleteJournalEntry'
import { Row, Col, Button} from 'react-bootstrap'
import ButtonStyles from '../styles/ButtonStyles'
import RowStyles from '../styles/RowStyles'
import LikeButton from '../LikeButton'

class AllJournalEntries extends React.Component {
  
  constructor (props) {
    super (props)
    this.state = {
      likeCount: 0
    }  
    this.handleLikeCount = this.handleLikeCount.bind(this)
  }

  // handleDelete = (journalEntry) => {
  //   this.props.deleteJournalEntry(journalEntry.id)
  // }

  handleLikeCount() {
    this.setState(state => ({
      likeCount: state.likeCount + 1
    }))
  } 

  render(){

    return(
    <RowStyles>
      <ButtonStyles>

        <Row className='left-justified-row'>
          <Col>
            { 
              this.props.journalEntries && [...this.props.journalEntries].map(journalEntry => 
                <div key={journalEntry.id}> 
                  <NavLink 
                    exact to={`/journals/${journalEntry.id}`}
                    style={{color: 'white'}}
                  >
                    {journalEntry.content}
                  </NavLink>
                  <br></br><br></br>

                  <LikeButton />

                  {/* <br></br><br></br> */}
                    {/* <Button 
                      onClick={() => handleDelete(journalEntry)}
                      className='btn-submit'
                    >
                      Delete Entry
                    </Button> */}

                  <br></br><br></br><br></br>
                </div>
              )}
          </Col>
        </Row>

      </ButtonStyles>
    </RowStyles>                
  )
}
}

export default connect(null, {deleteJournalEntry})(AllJournalEntries)