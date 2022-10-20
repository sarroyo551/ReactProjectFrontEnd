import React from 'react'
import { Link } from 'react-router-dom'

function AthleteCard({fighter}) {

  const {name, image, weight, id} = fighter

  return (
    <Link to={`/details/${id}`}>
    <div className='card'>
        <img src={image} alt={name} className='card-image'/>
        <div className='card-details'>
            <h3>{name}</h3>
            <h4>{weight}</h4>
        </div>
    </div>
    </Link>
  )
}

export default AthleteCard