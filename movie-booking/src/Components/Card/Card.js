import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './card.css'

const Card=() => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div className='container'>
        <img className='card-img' src={props.details.image} alt ={props.details.title} />
        <h2 className='bu-name'>{props.details.title}</h2>
        <button 
        className='card-btn-btn'
        onClick={()=>{
            dispatch(getMovieDetails(props.details.id))
            navigate(`/details/${props.details.id}`)
        }}
        >Details</button>
    </div>
  )
}

export default Card;