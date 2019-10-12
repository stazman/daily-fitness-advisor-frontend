import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ColumnStyles from '../styles/ColumnStyles'
import ButtonStyles from '../styles/ButtonStyles'

const JournalHome = () => {
  return (
    <>
      <RowStyles>
        <ColumnStyles>
          <ButtonStyles>    

            <Row className='centered-row'>
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
            </Row>

          </ButtonStyles>
        </ColumnStyles>
      </RowStyles>
    </>
  )
}
 
export default JournalHome