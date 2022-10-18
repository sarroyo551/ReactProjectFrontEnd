import React from 'react'

function AthleteCard({fighter}) {

  const {name, image, weight} = fighter

  return (
    <div className='card'>
        <img src={image} alt={name} className='card-image'/>
        <div className='card-details'>
            <h3>{name}</h3>
            <h4>{weight}</h4>
        </div>
    </div>
  )
}

export default AthleteCard