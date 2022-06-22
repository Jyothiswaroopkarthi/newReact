import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../../Redux/moviesSlice'
import Movie from './Movie'
import './movie.css'

const AllMovies=() =>{
    const dispatch=useDispatch()
    const movies= useSelector(state => state.allMovies.items)
    useEffect(()=>{
        dispatch(getMovies())
    },[dispatch])
  return (
    <div>
        <h3 className='card-title ml-5 mt-5'>All Movies</h3>
        <div className='cards-container'>
            {movies.map(movie =>{
                return <Movie key={movie.id} item ={movie} />
            })

            }
        </div>
    </div>
  )
}

export default AllMovies