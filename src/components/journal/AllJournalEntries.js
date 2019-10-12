import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteJournalEntry } from '../../actions/deleteJournalEntry'
import { Row, Col, Button} from 'react-bootstrap'
import ButtonStyles from '../styles/ButtonStyles'
import RowStyles from '../styles/RowStyles'

const AllJournalEntries = (props) => {

  const handleDelete = (journalEntry) => {
    props.deleteJournalEntry(journalEntry.id)
  }

  return (
    <RowStyles>
      <ButtonStyles>

        <Row className='left-justified-row'>
          <Col>
            { 
              props.journalEntries && [...props.journalEntries].map(journalEntry => 
                <div key={journalEntry.id}> 
                  <NavLink 
                    exact to={`/journals/${journalEntry.id}`}
                    style={{color: 'white'}}
                  >
                    {journalEntry.content}
                  </NavLink>
                  <br></br><br></br>
                    <Button 
                      onClick={() => handleDelete(journalEntry)}
                      className='btn-submit'
                    >
                      Delete Entry
                    </Button>
                  <br></br><br></br><br></br>
                </div>
              )
            }
          </Col>
        </Row>

      </ButtonStyles>
    </RowStyles>                
  )
}

export default connect(null, {deleteJournalEntry})(AllJournalEntries)