import React from 'react'
import {Redirect} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'

const JournalEntry = (props) => {

  const reverseProps = props.journalEntries.reverse()

  const journalEntry = reverseProps[props.match.params.id - 1]

  return (
    <RowStyles>
      <Row className='left-justified-row'>
        <Col>
          {journalEntry ? null : <Redirect to='/journals' />}
          {journalEntry ? journalEntry.content : null}
        </Col>
      </Row>
    </RowStyles>
  )
}

export default JournalEntry