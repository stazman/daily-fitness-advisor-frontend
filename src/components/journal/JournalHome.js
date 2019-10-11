import React from 'react'
import { Col, Button } from 'react-bootstrap'
import ButtonStyles from '../styles/ButtonStyles'
import ColumnStyles from '../styles/ColumnStyles'

const JournalHome = () => {
  return (
    <>
      <ColumnStyles>
        <ButtonStyles>    

          <Col lg={12} className='col-lg-12 message-col'>
            <h4>
              Your Weight Loss Journal
            </h4>
          </Col>

          <Col lg={12} className='col-lg-12 button-col'>
            <Button variant="main" href='/journals/new'>
              Add a New Entry
            </Button>
          </Col>

            <Col lg={12} className='col-lg-12 button-col'>
            <Button variant="main" href='/journals'>
              View All Entries
            </Button>
          </Col>

        </ButtonStyles>
      </ColumnStyles>
    </>
  )
}
 
export default JournalHome