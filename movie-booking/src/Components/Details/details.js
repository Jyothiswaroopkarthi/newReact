import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {useNavigate,useParams} from 'react-router-dom';
import { getMoviesDetails } from '../../Redux/detailsSlice';


const Details =()=>{
    const {id}= useParams("id")
    const navigate= useNavigate()
    const dispatch=useDispatch()
    const isAuth =useSelector(state =>state.authenticate.isAuthenticated)
    const details= useSelector(state =>{
        return state.detail.items
    })


    useEffect(()=>{
        dispatch(getMoviesDetails(id))
    },[dispatch])

    return(
        <div>
            <section className='details'>
                <img className='details-img' src={details.image} alt={details.title} />
                <div>
                    <h1 className='"details.title'>{details.title}</h1>
                    <p className='details-description'>{details.plot}</p>
                    <p className='details-director'>Director -{details.director}</p>
                    <p className='details-actors'>Stars -{details.stars}</p>


                    <button className='btn booknow px-5 py-2 fs-5'
                    onClick={()=>{
                        if(isAuth){
                            navigate('/booking',{state:id})
                        }else{
                            navigate('/auth')
                        }
                    }}>Book Now</button>
                </div>
            </section>
        </div>
    )
}

export default Details;