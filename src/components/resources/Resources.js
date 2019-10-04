import React from 'react'
 
const Resources = (props) => {
  return (
    <div>
      { 
        props.resources && props.resources.map(resource => 
          <li key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.url}>Go to Resource</a>
          </li>
        )
      }    
    </div>
  )
}

export default Resources