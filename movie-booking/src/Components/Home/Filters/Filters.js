import React from 'react'
import { Link } from 'react-router-dom'
import './filter.css'

const Filters=() => {
  return (
    <div className='fileter-container'>
        <Link className='filter-option' to="/latest">Latest Movies</Link>
        <Link className='filter-option' to="/upcoming">UpComing</Link>
        <Link className='filter-option' to="/nearby">NearBy Events</Link>
    </div>
  )
}

export default Filters;