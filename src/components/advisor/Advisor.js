import React from 'react'
import { Col, Button } from 'react-bootstrap'
import ButtonStyles from '../styles/ButtonStyles'
import ColumnStyles from '../styles/ColumnStyles'

const Advisor = () => {
  return (
    <>
      <ColumnStyles>
        <ButtonStyles>

          <Col lg={12} className='col-lg-12 message-col'>
              Losing weight is a marathon, not a sprint. But even a marathon begins with one step ...
          </Col>

          <Col 
            lg={12} 
            className='col-lg-12 button-col' 
            style={{paddingTop: '.3em'}}
          >
            <Button variant="main" href='/advisors/new'>
              Get Advice
            </Button>
          </Col>

        </ButtonStyles>
      </ColumnStyles>
    </>
  )
}

export default Advisor