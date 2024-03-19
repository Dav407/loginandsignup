import React from 'react'
import { useState } from 'react'


const Login = () => {
  const [ FirstName, setFirstName ] =useState('')
  const [ Password, setPassword ] =useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {FirstName, Password}
    console.log(formData)
  }

  return (
    
    <div className='form-container d-flex justify-content-center align-items-center vh-100'>
      <form onSubmit={submitForm} action="" className='border rounded bg-light p-5'>
      <h1 className='text-primary'>Login Form</h1>

    <div className="input-con">
      <label htmlFor="">Username:</label>
      <input value={FirstName}
      onChange={(e) => setFirstName(e.target.value)}
      type="text" 
      placeholder='username' />
    </div>

    <div className="input-con my-4">
      <label htmlFor="">PassWord:</label>
      <input value={Password}
      onChange={(e) => setPassword(e.target.value)}
      type="password" 
      placeholder='password' />
    </div>

    <div className="btn-container my-3">
            <button className='btn btn-primary w-100'>Signup</button>
          </div>
      </form>

    </div>
  )
}

export default Login