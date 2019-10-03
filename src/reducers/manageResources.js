const manageResources = (state = {resources: []}, action) => {
  switch (action.type){
    case 'FETCH_RESOURCES':
      return {resources: action.payload}
    
    default:
      return state
  }
}

export default manageResources