import React from 'react'
import { connect } from 'react-redux'
import { addFoodAdvisor } from '../../actions/addFoodAdvisor'
import { Row, Form, Button } from 'react-bootstrap'
import RowStyles from '../styles/RowStyles'
import ButtonStyles from '../styles/ButtonStyles'

class FoodAdvisorInput extends React.Component {

  // state = {
  //   how_big_meals: null,
  //   how_much_snacked: null,
  //   how_healthy: null
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value    
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.addFoodAdvisor(this.state)
  //   this.setState = ({
  //     how_big_meals: null,
  //     how_much_snacked: null,
  //     how_healthy: null
  //   })
  // }

  render(){
    return (
      <RowStyles>
        <ButtonStyles>

          <Row className='left-justified-row'>

            <Form>
              <Form.Check 
                type={'checkbox'}
                label={`How big were your meals?`}
              />

              <Form.Check
                disabled
                type={"checkbox"}
                label={'How much did you snack?'}
              />

              <Form.Check
                disabled
                type={"checkbox"}
                label={'How healthy was the food you ate?'}
              />

            </Form>
          </Row>

        </ButtonStyles> 
      </RowStyles>
    )
  }
}

export default FoodAdvisorInput

// connect(null, {addFoodAdvisor})(FoodAdvisorInput)