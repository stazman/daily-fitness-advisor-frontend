import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import { fetchFoodAdvisors } from '../actions/fetchFoodAdvisors'
import FoodAdvisorInput from '../components/food_advisor/FoodAdvisorInput'

class FoodAdvisorsContainer extends React.Component {

  // componentDidMount(){
  //   this.props.fetchFoodAdvisors()
  // }

  render(){
    return (
      <div>
        {/* <Switch> */}
          <Route
            exact path='/food_advisors/new'
            component={FoodAdvisorInput}
          />
          {/* <Route
            exact path='/food_advisors/'
            render={(routerProps) => <FoodAdvisors {...routerProps} resources={this.props.foodAdvisors} />}
          /> */}
        {/* </Switch> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodAdvisors: state.manageFoodAdvisors.foodAdvisors
  }
}

export default connect(mapStateToProps, {fetchFoodAdvisors})(FoodAdvisorsContainer)