import React from 'react'

function NewAthlete() {
  return (
    <div className='content'>
      <h1 className='new-athlete-heading'>Create Your Own Fighter</h1>
      <form className='athlete-form'>
        <div className='form-details'>
          <label>Name </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Image </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Record </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Reach </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Country of Origin </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Weight </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Age </label> 
          <input />
        </div>
        <div className='form-details'>
          <label>Height </label> 
          <input />
        </div>
        <button type='submit' className='submit-button'>Submit Fighter</button>
      </form>
    </div>
  )
}

export default NewAthlete