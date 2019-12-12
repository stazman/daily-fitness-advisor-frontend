import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import TextStyles from '../styles/TextStyles'

const FoodAdvisors = (props) => {
  return (
    <RowStyles>
      <TextStyles>

        <Row className='left-justified-row'>
          <Col>
            { 
              props.foodAdvisors && props.foodAdvisors.forEach((function(foodAdvisor) {
                  if (foodAdvisor === foodAdvisor[length-1]) {
                    return foodAdvisor
                  }
                })
              )
            } 
          </Col>   
        </Row>
        
      </TextStyles>
    </RowStyles>
  )
}

export default FoodAdvisors