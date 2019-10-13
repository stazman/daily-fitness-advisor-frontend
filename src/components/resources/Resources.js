import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import TextStyles from '../styles/TextStyles'

const Resources = (props) => {
  return (
    <RowStyles>
      <TextStyles>

        <Row className='left-justified-row'>
          <Col>
            { 
              props.resources && props.resources.map(resource => 
                <li key={resource.id}>
                  <h3 className='coral-text'>
                    {resource.title}
                  </h3>
                  <p>
                    {resource.description}
                  </p>
                  <a href={resource.url}>
                    Go to Resource
                  </a>
                  <br></br><br></br>
                </li>
              )
            } 
          </Col>   
        </Row>
        
      </TextStyles>
    </RowStyles>
  )
}

export default Resources