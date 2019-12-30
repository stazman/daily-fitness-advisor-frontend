import React from 'react'
import { Col, Button } from 'react-bootstrap'
import ButtonStyles from '../styles/ButtonStyles'
import ColumnStyles from '../styles/ColumnStyles'
import TextStyles from '../styles/TextStyles'

const Advisor = () => {
  return (
    <ColumnStyles>
      <ButtonStyles>
        <TextStyles>
          <Col lg={12} className='col-lg-12 message-col'>
              <h4>
                Just click to get advice, answer three questions, and stay fit!
              </h4>
          </Col>

          <Col lg={12} className='col-lg-12 button-col'>
            <Button variant="main" href='/food_advisors/new'>
                Get Food Advice
            </Button>
          </Col>

          <Col lg={12} className='col-lg-12 button-col' style={{paddingTop: '1rem'}}>
            <Button variant="main" href='/activity_advisors/new'>
              Get Activity Advice
            </Button>
          </Col>
        </TextStyles>
      </ButtonStyles>
    </ColumnStyles>
  )
}

export default Advisor