function manageFoodAdvice(state = {resources: []}, action){
  switch (action.type){
    case 'FETCH_LATEST_FOOD_ADVICE':
      return {
        foodAdvisors: action.payload
      }

    // case 'ADD_FOOD_ADVICE':
    //   return {
    //     ...state, foodAdvisors: [...state.foodAdvisors, action.payload]
    //   }
    
    default:
      return state
  }
}

export default manageFoodAdvice