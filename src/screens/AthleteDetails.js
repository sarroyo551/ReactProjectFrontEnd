import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


function AthleteDetails() {
  const params = useParams()
  // console.log(params)
  const [fighter, setFighter] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/Athletes/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setFighter(data)
      })
  },[])



  return (
    <div className='content'>
      {fighter && (
        <>
        <h1>{fighter.name}</h1>
        <img src={fighter.image} alt={fighter.name}/>
        <h3>Weight: {fighter.weight}</h3>
        <p>Reccord: {fighter.record}</p>
        <p>Reach: {fighter.reach}</p>
        <p>Country of Origin: {fighter['country of origin']}</p>
        <p>Age: {fighter.age}</p>
        <p>Height: {fighter.height}</p>
        </>
      )}      
      </div>
  )
}

export default AthleteDetails