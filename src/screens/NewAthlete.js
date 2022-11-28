import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function NewAthlete() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    record: '',
    reach: '',
    'country of origin': '',
    weight: '',
    age: '',
    height: ''
  })

  function handleChange (e) {
    // console.log(e.target.name)
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  } 

  function validateForm () {
    for (let key in formData) {
      if (formData[key] === '') {
        return false
      }
    }
    return true 
  }

  function handleSubmit (e) {
    e.preventDefault()

    if (validateForm()) {
      fetch('http://localhost:3000/Athletes', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((r) => r.json())
        .then(() => {
          setFormData({
            name: '',
            image: '',
            record: '',
            reach: '',
            'country of origin': '',
            weight: '',
            age: '',
            height: ''
          })
          navigate('/')
        })
    } else {
      alert('Form incomplete')
    return 
    }
  } 

  return (
    <div className='content'>
      <h1 className='new-athlete-heading'>Create Your Own Fighter</h1>
      <form className='athlete-form' onSubmit={handleSubmit}>
        <div className='form-details'>
          <label>Name </label> 
          <input name='name' onChange={handleChange} value={formData.name}/>
        </div>
        <div className='form-details'>
          <label>Image </label> 
          <input name='image' onChange={handleChange} value={formData.image}/>
        </div>
        <div className='form-details'>
          <label>Record </label> 
          <input name='record' onChange={handleChange} value={formData.record}/>
        </div>
        <div className='form-details'>
          <label>Reach </label> 
          <input name='reach' onChange={handleChange} value={formData.reach}/>
        </div>
        <div className='form-details'>
          <label>Country of Origin </label> 
          <input name='country of origin' onChange={handleChange} value={formData.country}/>
        </div>
        <div className='form-details'>
          <label>Weight </label> 
          <input name='weight' onChange={handleChange} value={formData.weight}/>
        </div>
        <div className='form-details'>
          <label>Age </label> 
          <input name='age' onChange={handleChange} value={formData.age}/>
        </div>
        <div className='form-details'>
          <label>Height </label> 
          <input name='height' onChange={handleChange}  value={formData.height}/>
        </div>
        <button type='submit' className='submit-button'>Submit Fighter</button>
      </form>
    </div>
  )
}

export default NewAthlete