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
             props.foodAdvisors && props.foodAdvisors.map((function(foodAdvisor) {
                 if (foodAdvisor === props.foodAdvisors[props.foodAdvisors.length-1]) {
                   return <li key={foodAdvisor.id}>{foodAdvisor.how_big_meals}{foodAdvisor.how_much_snacked}{foodAdvisor.how_healthy}</li>
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
