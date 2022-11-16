import React, {useState, useEffect} from 'react'
import AthleteCard from '../components/AthleteCard'

function Home() {
  const [fighters, setFighters] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:3000/Athletes')
        .then((r) => r.json())
        .then((data) => {
          setFighters(data)
        }) 
  }, [])

  
  const fighterMap = fighters.map((item) => <AthleteCard key={item.id} fighter={item}/>)

  return (
    <div className='content'>
      <div className='card-container'>{fighterMap}</div>
    </div>

  )
}

export default Home
