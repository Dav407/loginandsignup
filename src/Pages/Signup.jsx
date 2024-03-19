import React from 'react'
import { useState } from 'react'

const Signup = () => {
  const [FullName, setFullName] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')

  const submitForm = (e)=> {
    e.preventDefault()
    const formData = {FullName, Email, Phone, Password}
    console.log(formData)
  }
  return (
    <>
      <div className="form-container d-flex justify-content-center align-items-center vh-100">

        <form onSubmit={submitForm} action="" className='border rounded bg-light p-5'>
          <h2 className='text-center text-secondary'>Sign up</h2>
          <div className="input-container">
            <label htmlFor="">Fullname:</label>
            <input value={FullName}
             className=' bg-white' 
             onChange={(e) => setFullName(e.target.value)}
             type="text" 
             placeholder='Enter your fullname'/>
          </div>

          <div className="input-container my-3 ">
            <label htmlFor="">Email:</label>
            <input value={Email}
             type="email" 
             onChange={(e) => setEmail(e.target.value)}
             placeholder='Enter your email Address'/>
          </div>

          <div className="input-container my-3">
            <label htmlFor="">Phone Number:</label>
            <input value={Phone}
            onChange={(e) => setPhone(e.target.value)}
             type="tel" 
             placeholder='Enter your number'/>
          </div>

          <div className="input-container my-3">
            <label htmlFor="">Password:</label>
            <input value={Password} 
           onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder='Enter your Password'/>
          </div>

          <div className="btn-container my-3">
            <button className='btn btn-primary w-100'>Signup</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Signup