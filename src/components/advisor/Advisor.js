import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Advisor = () => {
  return (
    <>
    <style type="text/css">
      {`
        .btn-main {
          background-color: navy;
          color: white;
        }
      `}
    </style>

    <Container className='container'>
      <Row>
        <Col>
          <div>
            Losing weight is a marathon, not a sprint. But even a marathon begins with one step ...
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="main" href='/advisors/new'>
            Get Advice
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Advisor