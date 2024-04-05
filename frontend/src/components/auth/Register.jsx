import { Link } from 'react-router-dom'
import './Auth.scss'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {register} from '../../redux/authSlice'

const Register = () => {

    const dispatch=useDispatch()

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(register({
          name,password,email
        }))
        navigate('/login')
    }


  return (
    <div className="box">
      <h1>Register</h1>
      <form className='formContainer' onSubmit={submitHandler} >        
        <label htmlFor="name">Name</label>
        <input type="text"
        required
        id='name'
        value={name}
        placeholder='Enter your name'
        onChange={e=>setName(e.target.value)}
        autoComplete='on'
        />


        <label htmlFor="email">Email</label>
        <input type="email"
        required
        id='email'
        value={email}
        placeholder='Enter your email'
        onChange={e=>setEmail(e.target.value)}
        autoComplete='on'
        />


        <label htmlFor="password">Password</label>
        <input type="password"
        required
        id='password'
        value={password}
        placeholder='Enter your password'
        onChange={e=>setPassword(e.target.value)}        
        />


      <button type='submit' className='btn'>Submit</button>
      <span>Already Registered?
        <Link to='/login' >
          <button className='mybtn' >
            Log In
          </button>
        </Link>
      </span>
      </form>
    </div>
  )
}

export default Register
