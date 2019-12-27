import React from 'react'
import { Row } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import TextStyles from '../styles/TextStyles'
 
function FoodAdvisors(props){

  let howBigMeals = ''
  let howMuchSnacked = ''
  let howHealthy = ''
  let noAdvice = ''

  return (
   <RowStyles>
     <TextStyles>
 
       <Row className='centered-row-form'>
            { 
              props.foodAdvisors && props.foodAdvisors.map((function(foodAdvisor) {

                const howBigMealsCond = (props.foodAdvisors[props.foodAdvisors.length-1].how_big_meals + 
                  props.foodAdvisors[props.foodAdvisors.length-2].how_big_meals + 
                  props.foodAdvisors[props.foodAdvisors.length-3].how_big_meals)/3 > 3
              
                const howMuchSnackedCond = (props.foodAdvisors[props.foodAdvisors.length-1].how_much_snacked + 
                  props.foodAdvisors[props.foodAdvisors.length-2].how_much_snacked + 
                  props.foodAdvisors[props.foodAdvisors.length-3].how_much_snacked)/3 > 3
              
                const howHealthyCond = (props.foodAdvisors[props.foodAdvisors.length-1].how_healthy + 
                  props.foodAdvisors[props.foodAdvisors.length-2].how_healthy + 
                  props.foodAdvisors[props.foodAdvisors.length-3].how_healthy)/3 > 3

                if (foodAdvisor === props.foodAdvisors[props.foodAdvisors.length-1]) {

                  if (howBigMealsCond) {
                    howBigMeals = "Have smaller portions at each meal."
                  } 

                  if (howMuchSnackedCond && howBigMeals === "Have smaller portions at each meal.") {
                    howMuchSnacked = "Have smaller portions at each meal or have fewer snacks."
                  } else if ((howMuchSnackedCond) && howBigMeals !== "Have smaller portions at each meal.") {
                    howMuchSnacked = "Have larger portions of healthy meals and fewer snacks."
                  }

                  if (howHealthyCond) {
                    howHealthy = "Be sure to make healthy choices when you have a meal or snack."
                  }

                  if (howBigMeals === '' && howMuchSnacked === '' && howHealthy === ''){
                    noAdvice = "Nothing to pay special attention to now! Keep up the good work!"
                  }
                  
                  if (howBigMeals === 'Have smaller portions at each meal.' && howMuchSnacked.includes('Have smaller portions at each meal')){
                    howBigMeals = ''
                  }
                } 
                return (
                  <div>
                    <h3>{howBigMeals}</h3>
                    <br></br>
                    <h3>{howMuchSnacked}</h3>
                    <br></br>
                    <h3>{howHealthy}</h3>
                    <br></br>
                    <h3>{noAdvice}</h3>
                  </div>
                )
              })
            )
          }
       </Row>
      
     </TextStyles>
   </RowStyles>
 )
}
 
export default FoodAdvisors