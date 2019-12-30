import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ColumnStyles from '../styles/ColumnStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

 
const ResourceHome = () => {
  return (
    <>
      <RowStyles>
        <ColumnStyles>
          <ButtonStyles>
            <TextStyles> 
        
              <Row className='centered-row'>
                <Col lg={12} className='col-lg-12 message-col'>
                  <h3>
                    Your Resources
                  </h3>
                </Col>

                <Col lg={12} className='col-lg-12 button-col'>
                  <Button variant="main" href='/resources/new'>
                    Add a New Resource
                  </Button>
                </Col>

                <Col lg={12} className='col-lg-12 button-col'>
                  <Button variant="main" href='/resources'>
                    View All Resources
                  </Button>
                </Col>
              </Row>
              
            </TextStyles>   
          </ButtonStyles>
        </ColumnStyles>
      </RowStyles>
    </>
  )
}
 
export default ResourceHome