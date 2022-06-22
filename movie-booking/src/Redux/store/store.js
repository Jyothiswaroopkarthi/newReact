import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../authSlice'
import sliderReducer from '../sliderSlice'
import detailsReducer from '../detailsSlice'
import movieReducer from '../moviesSlice'



const store =configureStore({
    reducer:{
        authenticate :authReducer,
        sliderMovies:sliderReducer,
       detail:detailsReducer,
       allMovies:movieReducer,
    }
})

export default store