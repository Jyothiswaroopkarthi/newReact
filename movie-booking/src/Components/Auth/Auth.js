import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { authenticate } from '../../Redux/authSlice';
import "./auth.css"

const Auth=() => {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const isAuth =useSelector(state =>state.authenticate.isAuthenticated)
  const[email,setEmail]= useState('')
  const[pwd,setPwd]=useState('')
  return(
    <div className='form-container mx-4'>
        <form className='fs-5 mt-5'>
            <div className='form-group'>
                <label for='exampleinputemail'>EmailAddress</label>
                <input type="email"
                className="form-control"
                id="exampleinputemail"
                aria-describedby="emailHelp"
                placeholder="sample@gmail.com"
                required
                onChange ={(e)=>setEmail(e.target.value)} />

                <small id="emailHelp" className='form-text text-muted'>We'll never share your email with anyone else</small>
            </div>
            <div className='form-group'>
                <label for ="exampleinputpassword">Password</label>
                <input type="password" className="form-control" id ="exampleinputpasswword" 
                placeholder="Enter Your Password" required onChange={(e)=>setPwd(e.target.value)}  />
            </div>


            <button
            className='btn btn-primary mt-4 px-5 py-2'
            disabled={!(email.includes("@") && pwd)}
            onClick={()=>{
                dispatch(authenticate())
                navigate("/")
            }
        }>Submit</button>
        {isAuth}
        </form>
    </div>

  );

}

export default Auth;