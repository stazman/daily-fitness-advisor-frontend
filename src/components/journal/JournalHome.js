import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const JournalHome = () => {
  return (
    <>
    <style type="text/css">
      {`
        .flex-container {
          display: flex;
          width: 100vw;
          height: 100vh;
          flex-direction: column;
          align-items: center;
        }

        .btn-main {
          background-color: navy;
          color: white;
        }
      `}
    </style>

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
          <h4>
            Your Weight Loss Journal
          </h4>
        </Col>
      </Row>
    </Container>

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
          <Button variant="main" href='/journals/new'>
            Add a New Entry
          </Button>
        </Col>
      </Row>
    </Container>

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
          <Button variant="main" href='/journals'>
            View All Entries
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}
 
export default JournalHome