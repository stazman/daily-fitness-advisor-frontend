import React from 'react'
import { NavLink } from 'react-router-dom'
 
const JournalHome = () => {
  return (
    <div>
      <h3>
        Your Weight Loss Journal
      </h3>
      <NavLink exact to={'/journals/new'}>
        Add a New Entry
      </NavLink>
      <br></br><br></br>
      <NavLink exact to={'/journals'}>
        View All Entries
      </NavLink>
    </div>
  )
}
 
export default JournalHome