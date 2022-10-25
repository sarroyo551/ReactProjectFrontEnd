import {useState} from 'react'

function NewAthlete() {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    record: '',
    reach: '',
    country: '',
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

  function handleSubmit (e) {
    e.preventDefault()
    
  } 

  return (
    <div className='content'>
      <h1 className='new-athlete-heading'>Create Your Own Fighter</h1>
      <form className='athlete-form'>
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
          <input name='country' onChange={handleChange} value={formData.country}/>
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