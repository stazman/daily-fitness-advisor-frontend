import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteJournalEntry } from '../../actions/deleteJournalEntry'
import { Row, Col, Button} from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ColumnStyles from '../styles/ColumnStyles'
import ButtonStyles from '../styles/ButtonStyles'

class AllJournalEntries extends React.Component {
  
  handleDelete = (journalEntry) => {
    this.props.deleteJournalEntry(journalEntry.id)
  }

  render(){
    return (
      <RowStyles>
        <ColumnStyles>
          <ButtonStyles>

            <Row className='left-justified-row'>
              <Col className='bottom-visible' style={{paddingTop: '4rem'}}>
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
                      <Button 
                        onClick={() => this.handleDelete(journalEntry)}
                        className='btn-submit'
                      >
                        Delete
                      </Button>
                      <br></br><br></br><br></br>
                    </div>
                  )}
              </Col>
            </Row>

          </ButtonStyles>
        </ColumnStyles>
      </RowStyles>                
    )
  }
}

export default connect(null, {deleteJournalEntry})(AllJournalEntries)