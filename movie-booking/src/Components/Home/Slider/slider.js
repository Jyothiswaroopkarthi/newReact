import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getMovies } from '../../../Redux/sliderSlice';
import { getMoviesDetails } from '../../../Redux/detailsSlice';
import "./slider.css"

const Slider=()=> {
    const sliderMovies= useSelector(state =>state.sliderMovies.items)
    const dispatch=useDispatch()
    
    const [slideNumber,setSlideNumber]= useState(2);
    const imageUrls = sliderMovies.map(movie => movie.image)
    const ids =sliderMovies.map(movie=>movie.id)
    
    const navigate=useNavigate()
    
    
    useEffect(()=>{
        dispatch(getMovies())
    },[dispatch])
  return (
    <div className='carrousel'>
        <button 
        className='btn slider-btn'
        onClick={()=>{
            if(slideNumber !==1){
                setSlideNumber(slideNumber-1)
            }
            else{
                setSlideNumber(4)
            }
        }}
        > {"<"}</button>
    <section className='slides-container'>
        <img src={imageUrls[0]}
        className={slideNumber ===1 ?"slider-img active slide":"slider-img"}
        onClick={()=>{
            dispatch(getMoviesDetails(ids[0]))
            navigate("/details/1")
            
        }}
        />
        <img src={imageUrls[1]}
        className={slideNumber ===2 ?"slider-img active slide":"slider-img"}
        onClick={()=>{
            dispatch(getMoviesDetails(ids[1]))
            navigate("/details/2")
           
        }}
        />
        <img src={imageUrls[2]}
        className={slideNumber ===3 ?"slider-img active slide":"slider-img"}
        onClick={()=>{
            dispatch(getMoviesDetails(ids[2]))
            navigate("/details/3")
           
        }}
        />
        <img src={imageUrls[3]}
        className={slideNumber ===4 ?"slider-img active slide":"slider-img"}
        onClick={()=>{
            dispatch(getMoviesDetails(ids[3]))
            navigate("/details/4")


        }}
        />

        
    </section>
    <button 
        className='btn slider-btn'
        onClick={()=>{
            if(slideNumber !==4){
                setSlideNumber(slideNumber+1)
            }
            else{
                setSlideNumber(1)
            }
        }}
        >{"\>"}</button>

    </div>
  )
}

export default Slider;