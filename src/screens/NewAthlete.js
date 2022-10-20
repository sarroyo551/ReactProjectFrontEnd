import React from 'react'

function NewAthlete() {
  return (
    <div className='content'>
      <h1>Create Your Own Fighter</h1>
      <form className='athlete-form'>
        <label>Name  <input /> </label>
        <label>Image  <input /> </label>
        <label>Record  <input /> </label>
        <label>Reach  <input /> </label>
        <label>Country of Origin  <input /> </label>
        <label>Weight <input /> </label>
        <label>Age  <input /> </label>
        <label>Height  <input /> </label>
       
      </form>
    </div>
  )
}

export default NewAthlete