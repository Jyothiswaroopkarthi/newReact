import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../../Redux/detailsSlice';
import './movie.css'

const Movie=(props)=> {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return(
  <div className='card'>
    <img src={props.item.image} alt={props.item.title} className="card-image"/>
    <h1 className='card-title'>{props.item.title}</h1>
    <button className='btn btn-primary-px-5 py-3 mb-4 text-light'
    onClick={()=>{
        dispatch(getMovieDetails(props.item.id))
        navigate(`/details/${props.item.id}`)
    }}
    >Details</button>

  </div>
  );
}

export default Movie