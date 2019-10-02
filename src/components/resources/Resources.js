import React from 'react'
import { NavLink } from 'react-router-dom'
 
const Resources = () => {
  return (
    <div>
      <h3>
        Your Resources
      </h3>
      <NavLink exact to={'/resources/new'}>
        Add a New Resource
      </NavLink>
      <br></br><br></br>
      <NavLink exact to={'/resources'}>
        View All Resources
      </NavLink>
    </div>
  )
}
 
export default Resources