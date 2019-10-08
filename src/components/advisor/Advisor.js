import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Advisor = () => {
  return (
    <>
    <style type="text/css">
      {`
        section {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 35%;
        }

        section.button-on-top {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: baseline;
          align-content: top;
          width: 100%;
          height: 35%;
        }

        .flex-container {
          display: flex;
          width: 100vw;
          height: 100vh;
          flex-direction: column;
        }

        .btn-main {
          background-color: navy;
          color: white;
        }
      `}
    </style>

    <Container className='flex-container'>
      <section className='bottom'>
           <p className='align-self-center'>Losing weight is a marathon, not a sprint. But even a marathon begins with one step ...</p>
      </section>
      <section className='button-on-top'>
        <Button variant="main" href='/advisors/new'>
          Get Advice
        </Button>
      </section>
    </Container>
    </>
  )
}

export default Advisor