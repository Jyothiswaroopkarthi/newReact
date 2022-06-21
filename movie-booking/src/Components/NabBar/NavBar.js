import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import './navbar.css'

const NavBar =()=> {
    const isAuth=useSelector(state =>state.authenticate.isAuthenticated)
    const [keyword,setKeyword]= useState(null);
  return (
    <nav className='nav-container'>
        <Link className='nav-logo' to ="/">E-Cube</Link>
        <ul className='nav-links'>
            <li className='nav-link-item'>
                <Link className={isAuth ? "auth":""}
                style={{textDecoration:'none',color:'white'}}
                to={isAuth ? '/':'/auth'}
                onClick={()=>{
                    if(isAuth){
                        alert('user already Authenticated')
                    }
                }}
                >
                    {isAuth ?"AUTHENTICATED":"Authenticate"}
                    </Link>

            </li>
            <li>
                <input type="text" placeholder='Star Wars' />
            </li>
            <li>
                <input type="submit"value="go" onClick={()=>{
                    alert("sry this is yet to be implemted")
                }} />
            </li>
        </ul>

    </nav>
  );
}

export default NavBar