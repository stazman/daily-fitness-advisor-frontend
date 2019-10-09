import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
 
const ResourceHome = () => {
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
            Your Resources
          </h4>
        </Col>
      </Row>
    </Container>

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
          <Button variant="main" href='/resources/new'>
            Add a New Resource
          </Button>
        </Col>
      </Row>
    </Container>

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
          <Button variant="main" href='/resources'>
            View All Resources
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}
 
export default ResourceHome