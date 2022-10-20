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
      <h1>{fighter.name}</h1>      
      
      </div>
  )
}

export default AthleteDetails