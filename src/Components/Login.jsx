import React from 'react'
import {Link } from 'react-router-dom'

function Login() {
  return (
    <div className='d-flex justify-content-center bg-primary align-items-center vh-100'>
        <div className='text-white'>
        <h1>Login Page </h1>
       <Link to = '/'> <button className='btn btn-danger'>Login</button></Link>
        </div>
    </div>
  )
}

export default Login