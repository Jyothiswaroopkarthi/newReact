import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../authSlice'
import sliderReducer from '../sliderSlice'
import detailsReducer from '../detailsSlice'



const store =configureStore({
    reducer:{
        authenticate :authReducer,
        sliderMovies:sliderReducer,
       detail:detailsReducer,
    }
})

export default store