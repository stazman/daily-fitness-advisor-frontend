import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ColumnStyles from '../styles/ColumnStyles'
import TextStyles from '../styles/TextStyles'

const Resources = (props) => {
  return (
    <RowStyles>
      <ColumnStyles>
        <TextStyles>

          <Row className='left-justified-row-results'>
            <Col className='bottom-visible'>
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
      </ColumnStyles>
    </RowStyles>
  )
}

export default Resources