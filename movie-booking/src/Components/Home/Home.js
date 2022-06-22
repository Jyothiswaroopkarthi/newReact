import React from 'react'
import AllMovies from './AllMovies/AllMovies'
import Filters from './Filters/Filters'
import Slider from './Slider/Slider'


function Home() {
  return (
    <div>
        <Slider />
        <Filters />
        <AllMovies />
    </div>
  )
}

export default Home