import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Advisor = () => {
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
          <p className='align-self-center'>
            Losing weight is a marathon, not a sprint. But even a marathon begins with one step ...
          </p>
        </Col>
      </Row>
    </Container>

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
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